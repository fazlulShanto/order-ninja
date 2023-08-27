import {Response,Request}  from 'express';

export async function getOtp(req : Request,res:Response){
    
}
export async function createOtp(req : Request,res:Response){
    try {
        const {email} = req.params;
        
    } catch (error) {
        res.sendStatus(500);
    }
}