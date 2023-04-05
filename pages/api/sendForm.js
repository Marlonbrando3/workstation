// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer')

export default async function sendForm(req, res) {
  res.status(200).json({ 
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
    message: req.body.message
  })
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      port: 465,
      host: "mail-serwer141299.lh.pl",
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_ADRESS, // generated ethereal user
        pass: process.env.MAIL_PASS, // generated ethereal password
      },
    })

    const mailData = {
      from: req.body.email,
      to: process.env.MAIL_ADRESS,
      subject: `Wiadomość ze strony od: ${req.body.name}`,
      text: "Hello. This email is for your email verification.",
      html: 
      `Imię i nazwisko / firma: ${req.body.name}`+`<br>`+
      `Email kontaktowy: ${req.body.email}`+`<br>`+
      `Telefon kontaktowy: ${req.body.number}`+`<br><br>`+
      `Wiadomość ${req.body.message}`+`<br>`
    }

    transporter.sendMail(mailData, function (err, info) {
      console.log("wysłane")
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200)


}
