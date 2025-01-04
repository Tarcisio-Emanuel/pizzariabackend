import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest{
  name: string;
  email: string;
  password: string;
}

class CreateUserService{
  async execute({name, email, password}: UserRequest){

    // verificar se foi enviado um email
    if(!email){throw new Error("Email invalido")}

    // verificar se esse email esta cadastrado
    const userAlreadyExists = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })

    if(userAlreadyExists){
      throw new Error("Email já Cadastrado")
    }

    const passwordHash = await hash(password, 8)

    const user = await prismaClient.user.create({
      data:{
        name: name,
        email: email,
        password: passwordHash
      },
      select:{
        id: true,
        email:true,
        name:true
      }
    })

    return user
  }
}

export { CreateUserService }