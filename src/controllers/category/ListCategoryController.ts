import { Request, Response } from "express";
import {ListCategoryService} from '../../services/category/ListCategorySrever';

class ListCategoryController{

    async handle(req: Request, res: Response){

        const createCategoryService = new ListCategoryService();
        const category = await createCategoryService.execute();

        return res.json(category);
    }
}

export { ListCategoryController }