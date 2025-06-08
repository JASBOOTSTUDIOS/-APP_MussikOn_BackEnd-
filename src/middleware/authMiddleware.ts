import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_TOKEN = process.env.SECRET_TOKEN;

export const authMiddleware = (req: Request, res: Response, next: NextFunction) =>{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')){
        res.status(401).json({msg: "Token no proporcionado"});
    }

    const token = authHeader!.split(' ')[1];

    try{
        const decoded = jwt.verify(token, SECRET_TOKEN!);
        req.body = decoded;
        next();
    }catch(err){
        res.status(401).json({msg:"Token inválido o expirado",err});
    }
} 