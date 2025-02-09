import prismaClient from "../../prisma";

// CATEGORIA GET

class ListCategoryService{
  async execute(){

    const category = await prismaClient.category.findMany({
      select:{
        id: true,
        name: true,
      }
    })

    return category;

  }
}

export { ListCategoryService }