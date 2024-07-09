import { Response } from "express";

type TResponse<T> = {
    success: boolean;
    status: number;
    message: string;
    data: T
}

const sendResponse = <T>(res: Response, payload: TResponse<T>) => {
    return res.status(payload.status).json({
        success: payload.success,
        status: payload.status,
        message: payload.message,
        data: payload.data,
    })
};

export default sendResponse;