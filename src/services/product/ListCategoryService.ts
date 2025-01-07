import prismaClient from "../../prisma"
interface ProductRequest{category_id: string;}

class ListCategoryService{
    async execute({category_id}:ProductRequest){
        // listar produtos com omesmo ID
        const findByCategory = await prismaClient.product.findMany({
            where:{ category_id: category_id }
        })
        return findByCategory;
    }
}
export {ListCategoryService}