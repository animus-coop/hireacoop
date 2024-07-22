import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  const formData = await request.formData();
  const email = formData.get('email');
  const phone = formData.get('phone');
  const name = formData.get('name');
  const message = formData.get('message');
  const file = formData.get('file');
  const recaptchaToken = formData.get('recaptchaToken');

  // Verify reCAPTCHA token
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
  const recaptchaResponse = await fetch(verificationUrl, { method: 'POST' });
  const recaptchaResult = await recaptchaResponse.json();

  if (!recaptchaResult.success) {
    return NextResponse.json({ error: { en: 'Something went wrong with the reCAPTCHA verification.\nPlease refresh the page and try again.', es: 'Algo salió mal con la verificación de reCAPTCHA.\nPor favor actualizá la página e intentá de nuevo.' }, status: 400 });
  }

  const templatePath = path.join(process.cwd(), 'public', 'email-template.html');
  let template = fs.readFileSync(templatePath, 'utf8');

  const emailContent = template
    .replace('{{name}}', name)
    .replace('{{phone}}', phone)
    .replace('{{email}}', email)
    .replace('{{message}}', message);

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const attachments = [];
  if (file) {
    const arrayBuffer = await file.arrayBuffer();
    const content = new Uint8Array(arrayBuffer);

    attachments.push({
      filename: file.name,
      content,
    });
  }

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.TARGET_EMAIL,
    subject: `[${name}] Formulario de contacto de ANIMUS`,
    html: emailContent,
    attachments,
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