'use client';

import { useForm } from 'react-hook-form';
import { sendEmail } from '../../../utils/send-email';
import styles from './email-form.module.scss';
import { useState } from 'react';
import Image from 'next/image';
import Button from './button';
import toast from 'react-hot-toast';
import ReCAPTCHA from 'react-google-recaptcha';

function EmailForm({ dictionary, lang, cv = false }) {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const errorMessages = dictionary['errors'];

  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState('');
  const [fileTooBig, setFileTooBig] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleFileChange = (e) => {
    setFileTooBig(false);
    const file = e.target.files[0];

    const maxFileSizeMB = 5
    const maxFileSize = maxFileSizeMB * 1024 * 1024;

    if (file.size > maxFileSize) {
      e.target.value = '';
      setFileTooBig(true);
      setFileName('');
    } else {
      setFileName(file.name);
    }
  };

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

    if (fileTooBig) return;

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('phone', data.phone);
    formData.append('email', data.email);
    formData.append('message', data.message);
    formData.append('recaptchaToken', recaptchaToken);

    if (cv) {
      formData.append('file', data.file[0]);
    }
    
    const response = await sendEmail(formData);

    if (response.error || response.status !== 200) {
      showErrorToast(response.error?.[lang] ?? response.error);
    }

    setLoading(false);

    if (response.status === 200) {
      setRecaptchaToken(null);
      reset();
      setFileName('');
      showSuccessToast();
    }
  };

  function getErrorMessage(field) {
    if (field === 'file' && fileTooBig) {
      return errorMessages['fileTooBig'];
    }
    if (errors[field]?.type === 'required') {
      return errorMessages['requiredField'];
    }
    if (errors[field]?.type === 'pattern') {
      return errorMessages[`${field}Invalid`];
    }
    return '';
  }

  function isFileTheFirstError() {
    const errorsList = Object.keys(errors);
    if (errorsList[0] === "file") {
      return true;
    }
    return false;
  }

  return (
    <form id="email-form" className={styles.main} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.horizontal}>
        <div className={styles.inputContainer}>
          <label
            htmlFor='name'
          >
            {dictionary['name']}
          </label>
          <input
            id='name'
            name='name'
            disabled={loading}
            type='text'
            autoComplete='name'
            placeholder='Name Surname'
            {...register('name', { required: true })}
          />
          {errors.name && <p className={styles.alert}>{getErrorMessage('name')}</p>}
        </div>
        <div className={styles.inputContainer}>
          <label
            htmlFor='phone'
          >
            {dictionary['phone']}
          </label>
          <input
            id='phone'
            name='phone'
            disabled={loading}
            type='tel'
            autoComplete='tel'
            placeholder='+54 9 11 12345678'
            {...register('phone', { required: true, pattern: /^[0-9()+\s]+$/ })}
          />
          {errors.phone && <p className={styles.alert}>{getErrorMessage('phone')}</p>}
        </div>
      </div>

      <div className={styles.inputContainer}>
        <label
          htmlFor='email'
        >
          {dictionary['email']}
        </label>
        <input
          id='email'
          name='email'
          disabled={loading}
          type='email'
          autoComplete='email'
          placeholder='example@mail.com'
          {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
        />
        {errors.email && <p className={styles.alert}>{getErrorMessage('email')}</p>}
      </div>

      { cv && (
        <div className={styles.inputContainer}>
          <label
            htmlFor='file'
            className={styles.fileLabel}
          >
            {dictionary['uploadCV']}
            <div className={styles.input + (loading ? ` ${styles.disabled}` : '') + (isFileTheFirstError() ? ` ${styles.focus}` : '')}>
              <Image src='/upload.svg' width={23} height={23} alt='' />
              {fileName ? (<p className={styles.fileName}>{fileName}</p>) : (
                <p className={styles.noFileText}>{dictionary['noFileSelected']}</p>
              )}
            </div>
          </label>
          <input
            id='file'
            name='file'
            disabled={loading}
            type='file'
            accept='.pdf,.doc,.docx'
            style={{ display: 'none' }}
            onChange={handleFileChange}
            {...register('file', { required: true, onChange: (e) => handleFileChange(e) })}
          />
          {(errors.file || fileTooBig) && <p className={styles.alert}>{getErrorMessage('file')}</p>}
        </div>
      )}

      <div className={styles.inputContainer}>
        <label
          htmlFor='message'
        >
          {dictionary['message']}
        </label>
        <textarea
          id='message'
          name='message'
          disabled={loading}
          rows={10}
          autoComplete='off'
          {...register('message', { required: true })}
        />
        {errors.message && <p className={styles.alert}>{getErrorMessage('message')}</p>}
      </div>

      <ReCAPTCHA
        sitekey="6LdHCQMqAAAAAOM5IS4IpFsdwF5b68Wis14xJX_z"
        onChange={(token) => setRecaptchaToken(token)}
        onExpired={() => setRecaptchaToken(null)}
      />

      <div className={styles.buttonContainer}>
        <Button 
          text={dictionary['button']}
          loading={loading}
          loadingText={dictionary['uploading']}
          disabled={loading}
          submitForm
        />
      </div>
    </form>
  );
}

export default EmailForm;
