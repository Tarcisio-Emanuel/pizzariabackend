import { NextFunction, Request, Response } from 'express';
import { verify } from "jsonwebtoken";

interface PayLoad { sub: string; }

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    // receber TOKEN
    const authToken = req.headers.authorization;

    if (!authToken) { return res.status(401).end() }
    const [, token] = authToken.split(' ')

    try {
        // validar Token
        const {sub} = verify(
            token,
            process.env.JWT_SECRET
        ) as PayLoad;

        // recuperar o id do token e colocar dentro deuma variavel user_id dentro doRequest
        req.user_id = sub
        return next();

    } catch (err) {
        return res.status(401).end();
    }
}