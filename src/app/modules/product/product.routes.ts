import { Router } from "express";
import { ProductControllers } from "./product.controller";
import validateRequestHandler from "../../middlewares/validateRequestHandler";
import { validateProduct } from "./product.validation";

const router = Router();


router.post(
    '/',
    validateRequestHandler(validateProduct.createProductValidationSchema),
    ProductControllers.createProduct
);


export const ProductRoutes = router;