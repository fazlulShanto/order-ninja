import {Request} from 'express';

export interface IUserPayload{
    id : string,
    role : string,
    name : string,
    store_id ?: string
}

export interface CustomRequest extends Request {
    user?: IUserPayload;
}