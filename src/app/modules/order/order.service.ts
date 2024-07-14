import Product from "../product/product.model";
import { TOrderData } from "./order.interface";

const updateStockWithOrderData = async (payload: TOrderData) => {
    const { orderedProducts } = payload;
    const cartProducts = [];

    for (const item of orderedProducts) {
        const productId = item.productId;
        const orderQuantity = item.quantity;

        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { $inc: { stock: -orderQuantity } },
            { new: true },
        );

        if (!updatedProduct) {
            throw new Error(`Product not found with ID: ${productId}`);
        }
        cartProducts.push(updatedProduct);
    }

    return cartProducts;
}

export const OrderServices = {
    updateStockWithOrderData,
}