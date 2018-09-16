"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
const functions = require("firebase-functions");
admin.initializeApp();
function saveMessage({ name, email, subject, content }) {
    // The contact message text is required
    if (!content) {
        return Promise.resolve({
            success: false,
        });
    }
    // Saving the new contact message
    return admin.firestore().collection('/messages').add({
        name: name,
        email: email,
        subject: subject,
        content: content,
    }).then(() => {
        console.log('New contact message saved');
        return {
            success: true,
        };
    });
}
exports.onCallSendContactMessage = functions.https.onCall((data, _) => {
    console.log('Contact message data', data);
    return saveMessage(data);
});
exports.onRequestSendContactMessage = functions.https.onRequest((req, res) => {
    console.log('Contact message request', req);
    // Check for POST request
    if (req.method !== 'POST') {
        res.status(400).send({
            success: false,
            debug: 'Please send a POST request',
        });
        return;
    }
    saveMessage(req.body)
        .then(result => res.status(200).send(result))
        .catch(error => console.error('Error saving message', error));
});
//# sourceMappingURL=index.js.map