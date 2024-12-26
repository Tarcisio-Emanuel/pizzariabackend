import prismaClient from "../../prisma";

class CreateCategoryService{

    async execute(){
        const category = prismaClient.category.findMany({
            select:{
                id: true,
                name: true
            }
        })
        return category;
    }
}

export {CreateCategoryService};