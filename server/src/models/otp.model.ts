import mongoose from "mongoose";

export interface IOtp{
    otp : string,
    email : string
}

const otpSchema = new mongoose.Schema<IOtp>({
    otp : String,
    email : String
},{
    timestamps : true
});

const otpModel = mongoose.model<IOtp>('otp',otpSchema);

export async function getOtpByEmail(email : string ){
    try {
        const dbOtp = otpModel.findOne({email : email}).exec();
        return dbOtp;
    } catch (error) {
        throw error;
    }
}

export async function deleteOtp(email :string){
    try {
        const result =await otpModel.deleteMany({email : email});
        return true;
    } catch (error) {
        throw error;
    }
}