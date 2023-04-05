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
    let transporter = await nodemailer.createTransport({
      port: 465,
      host: "mail-serwer141299.lh.pl",
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'www@work-station.pl', // generated ethereal user
        pass: 'RQC7L@wE', // generated ethereal password
      },
    })


    const mailData = {
      from: req.body.email,
      to: 'www@work-station.pl',
      subject: `Wiadomość ze strony od: ${req.body.name}`,
      text: "Hello. This email is for your email verification.",
      html: 
      `Imię i nazwisko / firma: ${req.body.name}`+`<br>`+
      `Email kontaktowy: ${req.body.email}`+`<br>`+
      `Telefon kontaktowy: ${req.body.number}`+`<br><br>`+
      `Wiadomość ${req.body.message}`+`<br>`
    }

    await transporter.sendMail(mailData, function (err, info) {
      console.log("wysłane")
      if(err)
        res.json({info: "błąd"})
      else
        res.json({info: "poszło"})
    })
    res.status(200)


}
