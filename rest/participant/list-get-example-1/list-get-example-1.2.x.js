// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client
  .conferences('CFbbe4632a3c49700934481addd5ce1659')
  .participants.list((err, data) => {
    data.participants.forEach(participant => {
      console.log(participant.Muted);
    });
  });
