import { TProduct } from "./product.interface";

const createProductIntoDB = async (payload: TProduct) => {
    console.log(payload);
}


export const ProductServices = {
    createProductIntoDB,
}