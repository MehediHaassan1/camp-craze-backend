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

router.get(
    '/',
    ProductControllers.getProducts
)

router.get(
    '/:id',
    ProductControllers.getProduct
)

router.patch(
    '/:id',
    validateRequestHandler(validateProduct.updateProductValidationSchema),
    ProductControllers.updateProduct
)

router.delete(
    '/:id',
    ProductControllers.deleteProduct
)


export const ProductRoutes = router;