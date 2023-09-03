import axios from 'axios';
import {Request,Response,NextFunction} from 'express';
import { getDbPathoToken, updatePathoToken } from '../models/pathao.model';

export async function getPathaoToken() {
    try {
        let data = JSON.stringify({
            "base_url": "https://courier-api-sandbox.pathao.com",
            "client_id": "267",
            "client_secret": "wRcaibZkUdSNz2EI9ZyuXLlNrnAv0TdPUPXMnD39",
            "username": "test@pathao.com",
            "password": "lovePathao",
            "grant_type": "password"
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://hermes-api.p-stageenv.xyz/aladdin/api/v1/issue-token',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        const {data : resData} = await axios.request(config);
        return resData;

    } catch (error) {
        throw error;
    }
}

const PathaoAxios = axios.create({
    baseURL: 'https://courier-api-sandbox.pathao.com',
    headers: {
        'accept': "application/json",
        'content-type': "application/json"
    }
});

async function validateToken(req : Request,res : Response,next :NextFunction){
    try {

        const dbToken = await getDbPathoToken();
        if(!dbToken){
            const {data} = await getPathaoToken();
            const dbUpdate = await updatePathoToken(data);
            return next();
        }else{
            //validate this token
             
        }

        // set the new token to db and go next

        const data = PathaoAxios.get(`/aladdin/api/v1/countries/1/city-list`,{
            headers: {
                'Content-Type': 'application/json',
                "Authorization":"Bearer "
            },
        });
        return true;
    } catch (error) {
        console.log(error);
    }
    finally{
        const res = await getPathaoToken();
    
    }
}