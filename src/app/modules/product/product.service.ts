import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TProduct } from "./product.interface";
import Product from "./product.model";

const createProductIntoDB = async (payload: TProduct) => {
    const result = await Product.create(payload);
    return result;
}

const getProductsFromDB = async (searchQuery: string, sortDirection: number) => {
    let query: any = {};

    if (searchQuery) {
        const searchRegex = new RegExp(searchQuery, "i");
        query = {
            $or: [
                { name: searchRegex },
                { description: searchRegex }
            ]
        };
    }

    let sortCriteria: any = {};
    if (sortDirection === 0) {
        sortCriteria = {};
    } else if (sortDirection === 1) {
        sortCriteria = { price: 1 };
    } else if (sortDirection === -1) {
        sortCriteria = { price: -1 };
    }

    const result = await Product.find(query).sort(sortCriteria);
    return result;
}


const getProductFromDB = async (id: string) => {
    //? check the product exists or not
    const result = await Product.findById(id);
    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, 'Product not found')
    }
    return result;
}


const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
    //? check the product exists or not
    const product = await Product.findById(id);
    if (!product) {
        throw new AppError(httpStatus.NOT_FOUND, 'Product not found')
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
    if (!product) {
        throw new AppError(httpStatus.NOT_FOUND, 'Product not found')
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