'use client';

import { useForm } from 'react-hook-form';
import { sendEmail } from '../../../services/send-email';
import styles from './email-form.module.scss';
import { useState } from 'react';
import Button from './button';
import toast from 'react-hot-toast';
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ReCaptcha from './recaptcha';

function EmailForm({ dictionary, lang }) {
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
    formData.append('org', data.org);
    formData.append('country', data.country);
    formData.append('email', data.email);
    formData.append('message', data.message);
    formData.append('recaptchaToken', recaptchaToken);
    
    const response = await sendEmail(formData);

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
    return '';
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} language={lang}>
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
            id='org'
            name='org'
            disabled={loading}
            type='text'
            autoComplete='org'
            placeholder={dictionary['organization']}
            {...register('org', { required: true })}
          />
          {errors.organization && <p className={styles.alert}>{getErrorMessage('organization')}</p>}
        </div>

        <div className={styles.inputContainer}>
          <input
            id='country'
            name='country'
            disabled={loading}
            type='text'
            autoComplete='country'
            placeholder={dictionary['country']}
            {...register('country', { required: true })}
          />
          {errors.country && <p className={styles.alert}>{getErrorMessage('country')}</p>}
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

        <div className={styles.inputContainer}>
          <textarea
            id='message'
            name='message'
            disabled={loading}
            rows={10}
            autoComplete='off'
            placeholder={dictionary['message']}
            {...register('message', { required: true })}
          />
          {errors.message && <p className={styles.alert}>{getErrorMessage('message')}</p>}
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
    </GoogleReCaptchaProvider>
  );
}

export default EmailForm;
