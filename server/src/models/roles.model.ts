import mongoose from "mongoose";

export interface IRoles {
    id : string,
    name : string
}

const roleSchema = new mongoose.Schema({
    id :{
        type : String,
        unique : true,
        required : true
    },
    name : {
        type : String,
        required : true
    }
});

const roleModel = mongoose.model('role',roleSchema);

export async function getRole(roleId : string){
    try {
            const role = await roleModel.findOne({id : roleId}).exec();
            return role;
    } catch (error) {
        throw error;
    }
}