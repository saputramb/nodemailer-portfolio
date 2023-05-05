const mailerModel = require("../models/mailer");
require('dotenv').config();

class mailer {
    async nodeMailer(req, res) {
        try {
            // transporter.verify((error) => {
            //     if (error) {
            //         console.log(error);
            //     } else {
            //         console.log("Ready to Send");
            //     }
            // });
            const name = req.body.firstName + " " + req.body.lastName;
            const email = req.body.email;
            const message = req.body.message;
            const phone = req.body.phone;
            const mail = {
                from: name,
                to: process.env.RECIPIENT_EMAIL,
                subject: "Contact Form Submission - Portfolio",
                html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
            }
            console.log(req.body);
            let info = await mailerModel.sendMail(mail);
            res.status(200).json({
                messageId: info.messageId,
                message: 'Success',
                error: false
            });
        } catch (error) {
            console.error(error);
            res.status(404).json({
                error: true,
                message: error.message
            });
        }
    }
}

module.exports = new mailer();