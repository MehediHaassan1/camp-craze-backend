import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { OrderServices } from "./order.service";

const updateStockWithOrderData = catchAsync(async (req, res) => {
    const result = await OrderServices.updateStockWithOrderData(req.body);
    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: 'Products ordered successfully',
        data: result,
    })
})

export const OrderControllers = {
    updateStockWithOrderData
}