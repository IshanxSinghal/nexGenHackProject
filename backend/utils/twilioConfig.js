require("dotenv").config();

const twilio = require("twilio");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = new twilio(accountSid, authToken);
const TwilioPhoneNo = process.env.TWILIO_PHONE_NO;

const messageFunction = (data) => {
  console.log(data);

  client.messages
    .create({
      body: data.contentOfMsg,
      from: TwilioPhoneNo, // your Twilio number
      to: "+91" + data.phoneNo,
    })
    .then((msg) => console.log(`Sent to ${data.phoneNo}: ${msg.sid}`))
    .catch((err) => console.error(`Error sending to ${data.phoneNo}:`, err));
};

module.exports = messageFunction;
