// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer')

export default async (req, res) => {
  
    // create reusable transporter object using the default SMTP transport
    let transporter = await nodemailer.createTransport({
      port: 465,
      host: "mail-serwer141299.lh.pl",
      // secure: true,
      tls: {
        ciphers: "SSLv3",
      },
      auth: {
        user: "www@work-station.pl", // generated ethereal user
        pass: "RQC7L@wE", // generated ethereal password
      },
    })

    await transporter.verify(function (error, success) {
      if (error) {
          console.log(error);
          return res.json({info:"nie działa bo: "+error})
      } else {
          console.log("Server is ready to take our messages");
          return res.json({info:"działa: "+success})
      }})


    // const mailData = {
    //   from: req.body.email,
    //   to: 'www@work-station.pl',
    //   subject: `Wiadomość ze strony od: ${req.body.name}`,
    //   text: "Hello. This email is for your email verification.",
    //   html: 
    //   `Imię i nazwisko / firma: ${req.body.name}`+`<br>`+
    //   `Email kontaktowy: ${req.body.email}`+`<br>`+
    //   `Telefon kontaktowy: ${req.body.number}`+`<br><br>`+
    //   `Wiadomość ${req.body.message}`+`<br>`
    // }

    // await transporter.sendMail(mailData, function (err, info) {
    //   console.log("wysyłam")
    //   if(err)
    //     console.log("błąd: " +err)
    //   else
    //     console.log("wysłane: "+info)
    // })

}
