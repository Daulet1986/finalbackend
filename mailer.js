const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dauletaxmetbecov@gmail.com',
        pass: 'jeqv njri krlu nxbs',
    },
});

const sendEmail = (to, subject, html) => {
    const mailOptions = {
        from: 'dauletaxmetbecov@gmail.com',
        to,
        subject,
        html,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

module.exports = sendEmail;
