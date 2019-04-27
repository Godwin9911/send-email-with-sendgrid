  // using SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs

  if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'agedah99@gmail.com',//must be legit
    from: 'test@email.com',//can be random
    subject: 'Sending with SendGrid is Fun and eASY',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg);
