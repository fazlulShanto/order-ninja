import { sendOTP } from "./src/services/mail.service"



const main = async ()=>{
    try {
        const res = await sendOTP('alt.e3-c15k99@yopmail.com');
        console.log(`result : ${res}`);
    } catch (error) {
        console.log(`failed`);
    }
    
}

main();