'use client';

import { useCallback, useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

function ReCaptcha({ setRecaptchaToken }) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleRecaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      window.grecaptcha = undefined;
      return;
    }
    
    try {
      const token = await executeRecaptcha('sendEmail');
      setRecaptchaToken(token);
    } catch (error) {
      window.location.reload();
    }
  }, [executeRecaptcha, setRecaptchaToken]);

  useEffect(() => {
    handleRecaptchaVerify();
  }, [handleRecaptchaVerify]);

  return null;
}

export default ReCaptcha;