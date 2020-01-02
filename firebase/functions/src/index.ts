import * as functions from 'firebase-functions';
import Mailgun from 'mailgun-js';

const domain = 'sandbox1dccc713b67847b5a672236b1bad362f.mailgun.org';
const list = 'verdens-bedste-klimaplan';

const mailgun = Mailgun({
  apiKey: functions.config().mailgun.apikey, // https://firebase.google.com/docs/functions/config-env
  domain,
});

export const addRecipient = functions.https.onRequest((request, response) => {
  return new Promise(resolve => {
    const address = request.query.email;
    const name = request.query.name;
    // Add email to Mailgun list
    mailgun
      .lists(`${list}@${domain}`)
      .members()
      .create({ address, name, subscribed: true }, (err, data) => {
        response.json(data);
        resolve();
      });
  });
});
