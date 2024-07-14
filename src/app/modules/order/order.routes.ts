import { Router } from "express";
import validateRequestHandler from "../../middlewares/validateRequestHandler";
import { OrderControllers } from "./order.controller";
import orderValidationSchema from "./order.validation";

const router = Router()

router.patch('/complete-order',
    // validateRequestHandler(orderValidationSchema),
    OrderControllers.updateStockWithOrderData
)

export const OrderRoutes = router;