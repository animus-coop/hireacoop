'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import toast from 'react-hot-toast';

import { sendEmail } from '../../../../services/send-email';
import Button from '../button';
import ReCaptcha from '../recaptcha';
import styles from './collaborate-form.module.scss';

function CollaborateForm({ dictionary, lang }) {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const errorMessages = dictionary['errors'];

  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const showSuccessToast = () => {
    toast.success(dictionary["successMessage"], {
      iconTheme: {
        primary: '#369b6a',
        secondary: '#fff',
      },
      duration: 5000,
    });
  }

  const showErrorToast = (message) => {
    toast.error(message, {
      iconTheme: {
        primary: '#c53030',
        secondary: '#fff',
      },
    });
  }

  const onSubmit = async (data) => {
    if (!recaptchaToken) {
      showErrorToast(dictionary['missingCaptcha']);
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('organization', data.organization);
    formData.append('email', data.email);
    formData.append('recaptchaToken', recaptchaToken);
    formData.append('lang', lang);

    const endpoint = '/api/collaborate-email';
    const response = await sendEmail(endpoint, formData);

    if (response.error || response.status !== 200) {
      showErrorToast(response.error?.[lang] ?? response.error);
    }

    setLoading(false);

    if (response.status === 200) {
      setRecaptchaToken(null);
      reset();
      showSuccessToast();
    }
  };

  function getErrorMessage(field) {
    if (errors[field]?.type === 'required') {
      return errorMessages['requiredField'];
    }
    if (errors[field]?.type === 'pattern') {
      return errorMessages[`${field}Invalid`];
    }
    if (errors[field]?.type === 'maxLength') {
      return errorMessages[`${field}MaxLength`];
    }

    return '';
  }

  return (
    <form id="email-form" className={styles.main} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputContainer}>
        <input
          id='name'
          name='name'
          disabled={loading}
          type='text'
          autoComplete='name'
          placeholder={dictionary['name']}
          {...register('name', { required: true })}
        />
        {errors.name && <p className={styles.alert}>{getErrorMessage('name')}</p>}
      </div>

      <div className={styles.inputContainer}>
        <input
          id='organization'
          name='organization'
          disabled={loading}
          type='text'
          placeholder={dictionary['organization']}
          {...register('organization', { maxLength: 100 })}
        />
        {errors.organization && <p className={styles.alert}>{getErrorMessage('organization')}</p>}
      </div>

      <div className={styles.inputContainer}>
        <input
          id='email'
          name='email'
          disabled={loading}
          type='email'
          autoComplete='email'
          placeholder={dictionary['email']}
          {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
        />
        {errors.email && <p className={styles.alert}>{getErrorMessage('email')}</p>}
      </div>

      <ReCaptcha setRecaptchaToken={setRecaptchaToken} />

      <div className={styles.buttonContainer}>
        <Button
          text={dictionary['send']}
          loading={loading}
          disabled={loading}
          submitForm
        />
      </div>
    </form>
  );
}

export default CollaborateForm;
