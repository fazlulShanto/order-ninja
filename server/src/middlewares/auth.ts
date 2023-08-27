import jwt from 'jsonwebtoken';
import {Request,Response,NextFunction} from 'express';
import { config } from '../configs/config';
const {JWT_KEY} = config;

// const errorMessages = require('../utils/errorMessages');
interface RequestWithAuthUser extends Request {
    authUser : Object
}
export async function checkAuth(req :RequestWithAuthUser, res:Response, next:NextFunction) {
  try {
    const token  = req.headers['x-auth-token'] as string;
    // if (!token) return res.status(401).json(errorMessages.accessDenied);
    const data = jwt.verify( token, JWT_KEY);
    console.log('auth data',data);
    req.authUser = data;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') return res.status(401).json(error);
  }
}

