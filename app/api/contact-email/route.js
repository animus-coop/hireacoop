import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');
  const recaptchaToken = formData.get('recaptchaToken');


  // Verify reCAPTCHA token
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
  const recaptchaResponse = await fetch(verificationUrl, { method: 'POST' });
  const recaptchaResult = await recaptchaResponse.json();

  if (!recaptchaResult.success) {
    return NextResponse.json({ error: { en: 'Something went wrong with the reCAPTCHA verification.\nPlease refresh the page and try again.', es: 'Algo salió mal con la verificación de reCAPTCHA.\nPor favor actualizá la página e intentá de nuevo.' }, status: 400 });
  }

  const templatePath = path.join(process.cwd(), 'public', 'contact-email-template.html');
  let template = fs.readFileSync(templatePath, 'utf8');

  const emailContent = template
    .replace('{{name}}', name)
    .replace('{{email}}', email)
    .replace('{{message}}', message);

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.TARGET_EMAIL,
    subject: `[${name}] [${subject}] Hire a Coop - Formulario de contacto`,
    html: emailContent,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent successfully', status: 200 });
  } catch (error) {
    return NextResponse.json({ error: { en: 'Something went wrong. Please try again.', es: 'Algo salió mal. Por favor intentá de nuevo.' }, status: 500 });
  }
}