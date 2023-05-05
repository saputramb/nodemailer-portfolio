const nodemailer = require("nodemailer");
require('dotenv').config();

const mailerModel = () => {
    let transporter = nodemailer.createTransport({
        host: process.env.HOST_EMAIL,
        port: process.env.PORT_EMAIL,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD_EMAIL,
        },
    });
    return transporter;
}

module.exports = mailerModel();