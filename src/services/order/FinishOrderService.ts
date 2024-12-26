import prismaClient from "../../prisma";
interface OrderRequest { order_id: string; }

class FinishOrderService {
    async execute({ order_id }: OrderRequest) {
        const orderss = await prismaClient.order.update({ where: { id: order_id }, data: { status: true, } })
        return orderss;
    }
}

export { FinishOrderService };