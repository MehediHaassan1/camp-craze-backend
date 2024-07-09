import { TProduct } from "./product.interface";
import Product from "./product.model";

const createProductIntoDB = async (payload: TProduct) => {
    const result = await Product.create(payload);
    return result;
}

const getProductsFromDB = async () => {
    const result = await Product.find();
    return result;
}


const getProductFromDB = async (id: string) => {
    //? check the product exists or not
    const result = await Product.findById(id);
    if (!result) {
        console.log('Product not found')
        return;
    }
    return result;
}


const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
    //? check the product exists or not
    const product = await Product.findById(id);
    console.log(product)
    if (!product) {
        console.log('Product not found')
        return;
    }
    const result = await Product.findByIdAndUpdate(id,
        payload,
        { new: true }
    )
    return result;
}

const deleteProductFromDB = async (id: string) => {
    //? check the product exists or not
    const product = await Product.findById(id);
    console.log(product)
    if (!product) {
        console.log('Product not found')
        return;
    }

    //! delete product
    const result = await Product.findByIdAndUpdate(
        id,
        { isDeleted: true },
        { new: true }
    )
    return result;
}

export const ProductServices = {
    createProductIntoDB,
    getProductsFromDB,
    getProductFromDB,
    updateProductIntoDB,
    deleteProductFromDB,
}