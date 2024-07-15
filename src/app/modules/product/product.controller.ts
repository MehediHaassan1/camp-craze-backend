import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./product.service";
import AppError from "../../errors/AppError";
import { Request } from "express";

const createProduct = catchAsync(async (req, res) => {
    const result = await ProductServices.createProductIntoDB(req.body);
    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: 'Product created successfully',
        data: result,
    })
})


const getProducts = catchAsync(async (req, res) => {
    const { search, sort, category, price } = req.query;

    const result = await ProductServices.getProductsFromDB(search as string, parseInt(sort as string), category as string, parseInt(price as string));

    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: 'Products retrieved successfully',
        data: result,


    });
})

const getProduct = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await ProductServices.getProductFromDB(id);
    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: 'Product retrieved successfully',
        data: result,
    })
})


const updateProduct = catchAsync(async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const result = await ProductServices.updateProductIntoDB(id, data);
    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: 'Products updated successfully',
        data: result,
    })
})


const deleteProduct = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await ProductServices.deleteProductFromDB(id);
    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: 'Products deleted successfully',
        data: result,
    })
})

export const ProductControllers = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
}