import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { onCall, CallableRequest } from 'firebase-functions/v2/https';
import { defineSecret, defineString } from 'firebase-functions/params';
import * as logger from 'firebase-functions/logger';
import { createTransport } from 'nodemailer';

interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  content: string;
}

// Configuration provided at deploy time via secrets / params (replaces the
// deprecated `functions.config()` API). Set them with:
//   firebase functions:secrets:set GMAIL_EMAIL
//   firebase functions:secrets:set GMAIL_PASSWORD
//   firebase deploy --only functions  (you will be prompted for SITECONTACT_RECIPIENTS)
const gmailEmail = defineSecret('GMAIL_EMAIL');
const gmailPassword = defineSecret('GMAIL_PASSWORD');
const recipients = defineString('SITECONTACT_RECIPIENTS');

initializeApp();

export const onCallSendContactMessage = onCall(
  { secrets: [gmailEmail, gmailPassword] },
  async (request: CallableRequest<ContactMessage>): Promise<{ success: boolean }> => {
    const data = request.data;
    logger.info('Contact message data', data);
    try {
      await saveMessage(data);
      await sendContactEmail(data);
      return { success: true };
    } catch {
      return { success: false };
    }
  },
);

async function saveMessage(contactMessage: ContactMessage): Promise<void> {
  const { name, email, subject, content } = contactMessage;

  if (!name || !email || !subject || !content) {
    throw new Error('Missing required fields');
  }

  await getFirestore()
    .collection('messages')
    .add({
      name,
      email,
      subject,
      content,
      createdAt: new Date(),
    });
  logger.info(`Message from ${name} (${email}) was saved`);
}

async function sendContactEmail(contactMessage: ContactMessage): Promise<void> {
  const { name, email, subject, content } = contactMessage;

  const mailTransport = createTransport({
    service: 'gmail',
    auth: {
      user: gmailEmail.value(),
      pass: gmailPassword.value(),
    },
  });

  const emailMessage = {
    from: '"neygutemberg.com.br" <noreply@firebase.com>',
    to: recipients.value(),
    subject: 'Você recebeu uma mensagem pelo site :)',
    text: `
      A seguinte mensagem foi enviada através do seu web site.

      Nome:
      ${name}

      E-mail:
      ${email}

      Assunto:
      ${subject}

      Mensagem:
      ${content}

    `.split('\n').map(line => line.trim()).join('\n'),
  };

  await mailTransport.sendMail(emailMessage);
  logger.info(`Message from ${name} (${email}) was sent via email`);
}
