import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

import { getDictionary } from '@/get-dictionary';


export async function sendCollaborateEmails(
  externalMail,
  externalMailContentValues,
  internalMailContentValues,
  lang,
) {
  return Promise.all([
    sendCollaborateExternalEmail(
      externalMail,
      externalMailContentValues,
      lang,
    ),
    sendCollaborateInternalEmail(
      internalMailContentValues,
    ),
  ])
}

async function sendCollaborateExternalEmail(
  to,
  contentValues,
  lang,
) {
  const dictionary = await getDictionary(lang);

  const templateName = 'collaborate-email-external-template.html';

  const templateWithContent = await getTemplateWithContent(
    templateName,
    contentValues,
  );

  const attachments = [
    {
      filename: 'HAC(ESP).pdf',
      publicName: 'HAC(ESP).pdf',
    },
    {
      filename: 'HAC(ENG).pdf',
      publicName: 'HAC(ENG).pdf',
    },
  ]

  const subject = dictionary['collaborateForm']['email']['subject'];

  await sendEmail(
    process.env.EMAIL,
    to,
    subject,
    templateWithContent,
    attachments,
  );
}

async function sendCollaborateInternalEmail(
  contentValues,
) {
  const templateName = 'collaborate-email-internal-template.html';

  const templateWithContent = await getTemplateWithContent(
    templateName,
    contentValues,
  );

  const subject = `[${contentValues.name}] [${contentValues.organization ? contentValues.organization : 'NoDef'}] Hire a Coop - Formulario de colaboración`

  await sendEmail(
    process.env.EMAIL,
    process.env.TARGET_EMAIL,
    subject,
    templateWithContent,
  );
}

async function sendEmail(
  from,
  to,
  subject,
  emailContent,
  attachments = [],
) {
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from,
    to,
    subject,
    html: emailContent,
    attachments: attachments.map(attachment => getAttachment(attachment.filename, attachment.publicName))
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

  await sendMailPromise();
}

async function getTemplateWithContent(
  templateName,
  contentValues
) {
  const templatePath = path.join(process.cwd(), 'public', templateName);
  let template = fs.readFileSync(templatePath, 'utf8');

  const templateWithContent =  Object.keys(contentValues).reduce(
    (resTemplate, key) => resTemplate.replace(`{{${key}}}`, contentValues[key]),
    template
  );

  return templateWithContent;
}

function getAttachment(filename, publicName) {
  const filePath = path.join(process.cwd(), 'shareable-content', filename);
  const fileContent = fs.readFileSync(filePath);

  return {
    filename: publicName,
    content: fileContent,
  };
}
