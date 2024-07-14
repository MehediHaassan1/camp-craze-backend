import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import AppError from "../errors/AppError";
import { TErrorResponse, TErrorSources } from "../interface";
import handleZodError from "../errors/handleZodError";



const globalErrorHandler = (
    error: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let message = error.message || 'Something went wrong!'
    let status = error.status || 500;

    let errorSources: TErrorSources = [
        {
            path: '',
            message: 'Something went wrong!'
        }
    ]

    if (error instanceof ZodError) {
        const zodError = handleZodError(error);
        errorSources = zodError.errorSources;
        message = zodError.message;
        status = zodError.status;
    } else if (error instanceof AppError) {
        status = error?.status;
        message = error.message;
        errorSources = [
            {
                path: '',
                message: error?.message,
            },
        ];
    }


    return res.status(status).json({
        success: false,
        status,
        message,
        errorSources,
    })
};

export default globalErrorHandler;