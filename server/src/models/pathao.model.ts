import mongoose from "mongoose";

export interface IPathoToken{
    id : 1,
    token_type:string,
    expires_in: number,
    access_token: string,
    refresh_token:string
}

const pathaoSchema = new mongoose.Schema<IPathoToken>({
    id : Number,
    token_type:String,
    expires_in: String,
    access_token: String,
    refresh_token:String
},{
    timestamps : true
});

const pathaoModel = mongoose.model<IPathoToken>('pathao',pathaoSchema);

export async function updatePathoToken(obj : IPathoToken ){
    try {
        const token = pathaoModel.findByIdAndUpdate({id : 1},obj,{upsert:true}).exec();
        return token;
    } catch (error) {
        throw error;
    }
}

export async function getDbPathoToken( ){
    try {
        const token = pathaoModel.findOne({id : 1}).exec();
        return token;
    } catch (error) {
        throw error;
    }
}

export async function deleteToken(){
    try {
        const result = await pathaoModel.deleteMany({id : 1});
        return true;
    } catch (error) {
        throw error;
    }
}