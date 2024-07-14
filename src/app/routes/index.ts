import { Router } from "express";
import { ProductRoutes } from "../modules/product/product.routes";
import { OrderRoutes } from "../modules/order/order.routes";

const router = Router();


router.use('/products', ProductRoutes)

router.use('/order', OrderRoutes)


export default router;