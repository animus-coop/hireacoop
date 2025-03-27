'use client'

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";


export default function WithRecatchaContent({
  children,
  lang,
}) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      language={lang}
    >
      {children}
    </GoogleReCaptchaProvider>
  )
}
