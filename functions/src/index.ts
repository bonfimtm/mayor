import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { createTransport } from 'nodemailer';

interface ContactMessage {
    name: string,
    email: string,
    subject: string,
    content: string,
};

// Configure the email transport using the default SMTP transport and a GMail account.
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword,
    },
});
const recipients = functions.config().sitecontact.recipients;

admin.initializeApp();

export const onCallSendContactMessage = functions.https.onCall(async (data: ContactMessage, _): Promise<any> => {
    console.log('Contact message data', data);
    return saveMessage(data)
        .then(() => sendContactEmail(data))
        .then(() => { return { success: true } })
        .catch(() => { return { success: false } });
});

function saveMessage(contactMessage: ContactMessage): Promise<any> {

    const { name, email, subject, content } = contactMessage;

    // The contact message text is required
    if (!name || !email || !subject || !content) {
        return Promise.reject("Missing required fields");
    }

    // Saving the new contact message
    return admin.firestore().collection('/messages')
        .add({
            name: name,
            email: email,
            subject: subject,
            content: content,
            createdAt: new Date(),
        })
        .then(() => console.log(`Message from ${name} (${email}) was saved`))
        .catch((error: any) => console.error('There was an error while saving the message:', error));
}

// Sends contact message via email
function sendContactEmail(contactMessage: ContactMessage): Promise<any> {

    const { name, email, subject, content } = contactMessage;

    const emailMessage = {
        from: '"neygutemberg.com.br" <noreply@firebase.com>',
        to: recipients,
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

    return mailTransport.sendMail(emailMessage)
        .then(() => console.log(`Message from ${name} (${email}) was sent via email`))
        .catch((error: any) => console.error('There was an error while sending the email:', error));
};
