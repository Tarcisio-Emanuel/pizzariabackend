import {Request, Response} from "express";
import { ListCategoryService } from "../../services/product/ListCategoryService";


class ListByCategoryController{

    async handle(req: Request, res: Response){
        const category_id = req.query.category_id as string;


        const listByCategory = new  ListCategoryService();

        const  product = await listByCategory.execute({category_id});

        return res.json(product)
    }
}

export {ListByCategoryController}