import { NextResponse } from 'next/server';

import { sendCollaborateEmails } from './utils';

export async function POST(request) {
  const formData = await request.formData();
  const name = formData.get('name');
  const organization = formData.get('organization');
  const email = formData.get('email');
  const recaptchaToken = formData.get('recaptchaToken');

  // Verify reCAPTCHA token
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
  const recaptchaResponse = await fetch(verificationUrl, { method: 'POST' });
  const recaptchaResult = await recaptchaResponse.json();

  if (!recaptchaResult.success) {
    return NextResponse.json({ error: { en: 'Something went wrong with the reCAPTCHA verification.\nPlease refresh the page and try again.', es: 'Algo salió mal con la verificación de reCAPTCHA.\nPor favor actualizá la página e intentá de nuevo.' }, status: 400 });
  }

  try {
    await sendCollaborateEmails(
      email,
      {},
      {
        name,
        email,
        organization,
      },
    );

    return NextResponse.json({ message: 'Email sent successfully', status: 200 });
  } catch (error) {
    return NextResponse.json({
      error: {
        en: 'Something went wrong. Please try again.',
        es: 'Algo salió mal. Por favor intentá de nuevo.',
      },
      status: 500,
    });
  }
}
