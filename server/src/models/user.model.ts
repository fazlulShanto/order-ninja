import mongoose, { mongo } from "mongoose";
export interface IUser{
    id:string,
    store_id ? : string,
    first_name ?: string,
    last_name?:string,
    role : string,
    password:string,
    email:string,
    city?:string,
    zone ?: string,
    area ?: string,
    phone ?: string,
    address ?:string,
    avatar ?: string,
    store_name ?: string
}

const userSchema = new mongoose.Schema<IUser>({
    id:String,
    first_name : String,
    last_name : String,
    role : String,
    store_id:String,
    store_name: String,
    password : String,
    email : {
        type : String,
        unique:true
    },
    city : String,
    zone : String,
    area : String,
    phone : String,
    address : String,
    avatar : String
},{
    timestamps:true
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

export async function getUserById(userId : string){
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
export async function getUserByEmail(email : string){
    try {
        const data = await userModel.findOne({email:email}).exec();
        if(!data){
            return undefined;
        }
        return data;
    } catch (error) {
        throw error;
    }
}

export async function createUser(userObj : IUser){
    try {
        // console.log(`==========user obj`,userObj)
        const result = await userModel.create(userObj);
        return true;
    } catch (error) {
        throw error;
    }
}

export async function getUserRoles (userId:string){
    try {
        const data = await userModel.findOne({id:userId}).select('roles').exec();
        if(data?.role.length){
            return data;
        }
        return data;
    } catch (error) {
    throw error;
    }
}

export async function deleteUserById(userId : string){
    try {
        const result = userModel.deleteOne({id : userId}).exec();
        return result;
    } catch (error) {
        throw error;
    }
}
export async function updateUserById(userId : string,updatedUser : IUser){
    try {
        const result = userModel.updateOne({id : userId},updatedUser).exec();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function getAllUsers(){
    try {
        const result = await userModel.find({}).exec();
        return result;
    } catch (error) {
        throw error;
    }
}