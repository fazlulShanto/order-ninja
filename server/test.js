// const nodemailer = require('nodemailer');
// require('dotenv').config();
// const transporter = nodemailer.createTransport({
//     service:'gmail',
//     auth: {
//       user: process.env.MAIL_USER,
//       pass: process.env.MAIL_PASS
//     }
//   });

//   async function main() {
//     // send mail with defined transport object
//     const mailOptions = {
//        from:process.env.MAIL_USER,
//        to:"b.o.a.n.so.r.e@gmail.com",
//        subject:"this is subject",
//        text:"this is message"
//    }
//    transporter.sendMail(
//     mailOptions,(err,info)=>{
//         if(!err){
//             console.log(info.response);
//           console.log("Sucessfully send the mail")
//        }else{
//             console.log("can't send mail",err);
//         }
//     }
//  )
// }

// main().catch(console.error);


const axios = require('axios');
let data = JSON.stringify({
  "base_url": "https://courier-api-sandbox.pathao.com",
  "client_id": "267",
  "client_secret": "wRcaibZkUdSNz2EI9ZyuXLlNrnAv0TdPUPXMnD39",
  "username": "test@pathao.com",
  "password": "lovePathao",
  "grant_type": "password"
});

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://courier-api-sandbox.pathao.com/aladdin/api/v1/countries/1/city-list',
  // url: 'https://hermes-api.p-stageenv.xyz/aladdin/api/v1/issue-token',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
