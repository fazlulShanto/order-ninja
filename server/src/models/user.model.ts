import mongoose, { mongo } from "mongoose";
export interface IUser{
    id:string,
    first_name : string,
    last_name:string,
    roles : [],
    password:string,
    email:string,
    phone : string,
    address:string,
    avatar : string
}

const userSchema = new mongoose.Schema<IUser>({
    id:String,
    first_name : String,
    last_name : String,
    roles : [],
    password : String,
    email : {
        type : String,
        unique:true
    },
    phone : String,
    address : String,
    avatar : String
});

const userModel = mongoose.model<IUser>('user',userSchema);

export async function getFullName(userId:string){
    try {
        const data = await userModel.findOne({id : userId});
        if(!data){
            return undefined;
        }
        return data.first_name+" "+data.last_name;
    } catch (error) {
        throw error;
    }
}

export async function getUser(userId : string){
    try {
        const data = await userModel.findOne({id : userId}).exec();
        if(!data){
            return undefined;
        }
        return data;
    } catch (error) {
        throw error;
    }
}

export async function getUserRoles (userId:string){
    try {
        const data = await userModel.findOne({id:userId}).select('roles').exec();
        if(data?.roles.length){
            return data;
        }
        return data;
    } catch (error) {
    throw error;
    }
}