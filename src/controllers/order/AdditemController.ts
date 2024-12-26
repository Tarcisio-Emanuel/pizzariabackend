import { Request, Response } from "express";
import {AdditemService} from "../../services/order/AdditemService";
class AdditemController{

    async handle(req: Request, res: Response){
        const {order_id, product_id, amount} = req.body;

        const additemService = new AdditemService();
        const order = await additemService.execute({order_id, product_id, amount})
        return res.json(order)
    }



}

export{AdditemController};