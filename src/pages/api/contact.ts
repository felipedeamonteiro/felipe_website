import nodemailer from 'nodemailer';

export default function (req, res) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.MAIL_PASSWORD
    },
    secure: true,
  });

  const mailData = {
    from: 'Mensagem do site portfolio',
    to: 'felipedeamonteiro@gmail.com',
    subject: 'Mensagem do site portfolio',
    text: req.body.message,
    html: `<div>
            <h2>Mensagem de: ${req.body.name} </h2>
            <h3>Email: ${req.body.mail}</h3>
            <h4>Assunto: ${req.body.subject}</h4>
            <p>${req.body.message}</p>
          </div>`
  }
  
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })

  console.log(req.body);
  res.status(200);
}
