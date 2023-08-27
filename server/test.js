const nodemailer = require('nodemailer');
require('dotenv').config();
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  async function main() {
    // send mail with defined transport object
    const mailOptions = {
       from:process.env.MAIL_USER,
       to:"b.o.a.n.so.r.e@gmail.com",
       subject:"this is subject",
       text:"this is message"
   }
   transporter.sendMail(
    mailOptions,(err,info)=>{
        if(!err){
            console.log(info.response);
          console.log("Sucessfully send the mail")
       }else{
            console.log("can't send mail",err);
        }
    }
 )
}

main().catch(console.error);