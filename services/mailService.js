const nodemailer = require("nodemailer");

async function sendMail ({from, to, subject, text, html}) {
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.MAIL_USER,
            pass :process.env.MAIL_PASS,
        }

    });

    let info = await transporter.sendMail({
        from: `inShare <${from}>`,
        to ,
        subject,
        text,
        html,

    });
    console.log(info);
}




module.exports = sendMail;











// module.exports = async ({ from, to, subject, text, html}) => {
//         let transporter = nodemailer.createTransport({
//             host: process.env.SMTP_HOST,
//             port: process.env.SMTP_PORT,
//             secure: false, // true for 465, false for other ports
//             auth: {
//                 user: process.env.MAIL_USER, // generated ethereal user
//                 pass: process.env.MAIL_PASSWORD, // generated ethereal password
//             },
//         });

//         // send mail with defined transport object
//     let info = await transporter.sendMail({
//         from: `inShare <${from}>`, // sender address
//         to: to, // list of receivers
//         subject: subject, // Subject line
//         text: text, // plain text body
//         html: html, // html body
//     });

//     console.log(info);
// }