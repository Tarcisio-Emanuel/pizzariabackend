import prismaClient from "../../prisma"
import {hash} from 'bcryptjs';

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({ name, email, password }: UserRequest) {

        // verificar se ele enviou um email
        if (!email) {
            throw new Error("EMAIL INCORRETO")
        }





        // verificar se esse email te cadastrado na plataforma
        const userAleadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })


        if (userAleadyExists) { throw new Error("ESTE EMAIL JA EXISTE") }

        const passwordHash = await hash(password, 8)


        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
            },
            select:{
                id: true,
                name: true,
                email: true,
            }
        })




        return user;
    }
}
export { CreateUserService }










