import nodemailer from 'nodemailer';


export async function sendCollaborateEmails(
  externalMail,
  externalMailContentValues,
  internalMailContentValues,
) {
  Promise.all([
    sendCollaborateExternalEmail(
      externalMail,
      externalMailContentValues,
    ),
    sendCollaborateInternalEmail(
      internalMailContentValues,
    ),
  ])
}

async function sendCollaborateExternalEmail(
  to,
  contentValues,
) {
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

  await sendEmail(
    process.env.EMAIL,
    to,
    'sendCollaborateExternalEmail',
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

  await sendEmail(
    process.env.EMAIL,
    process.env.TARGET_EMAIL,
    'sendCollaborateInternalEmail',
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

  await transport.sendMail(mailOptions);
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
  const path = path.join(process.cwd(), 'shareable-content', filename);
  const fileContent = fs.readFileSync(filePath);

  return {
    filename: publicName,
    content: fileContent,
  };
}
