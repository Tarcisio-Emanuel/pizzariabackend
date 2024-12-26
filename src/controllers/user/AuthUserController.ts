import {Request, Response} from 'express';
import { AuthUserService } from '../../services/user/AuthUserService';


function AuthUserController(){

     this.handle = async (req:Request,  res: Response) =>{
        const {email, password} = req.body;
        const  authUserService = new AuthUserService();
        const auth = await authUserService.execute({email, password});

        return res.json(auth);
    }
}

export {AuthUserController}