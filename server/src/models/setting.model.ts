import mongoose from "mongoose";


export interface IUserProfile {
    id :string,
    first_name : string,
    last_name : string,
    phone : string,
    email : string,
    city : string,
    zone : string,
    area : string,
    address : string
}

const profileSchema = new mongoose.Schema({
    id : String,
    first_name : String,
    last_name : String,
    phone : String,
    email : String,
    city : String,
    zone : String,
    area : String,
    address : String
});

const profileModel = mongoose.model('role',profileSchema);

export async function getProfile(userId : string){
    try {
            const role = await profileModel.findOne({id : userId}).exec();
            return role;
    } catch (error) {
        throw error;
    }
}

export async function updateProfile(userId : string,updatedObj){
    try {
            const role = await profileModel.findOneAndUpdate({id : userId}).exec();
            return role;
    } catch (error) {
        throw error;
    }
}

