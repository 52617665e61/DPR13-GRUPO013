var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
  auth: {
    user: 'ggustavo.ofc@gmail.com',
    pass: 'Estudar#prazerose!comCerteza()'
  }
});

var mailOptions = {
  from: 'ggustavo.ofc@gmail.com',
  to: 'ggustavo.ofc@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});