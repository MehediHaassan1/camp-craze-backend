import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

const globalErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    let message = error.message || 'Something went wrong!'
    let status = error.status || 500;

    let errorSources = [
        {
            path: '',
            message: 'Something went wrong!'
        }
    ]

    if (error instanceof ZodError) {
        errorSources = error.issues.map((issue) => {
            return {
                path: issue.path[issue.path.length - 1],
                message: issue.message,
            }
        });
        message = 'Validation error';
        status = 400;
    }


    return res.status(status).json({
        success: false,
        status,
        message,
        errorSources,
        // error: error
    })
};

export default globalErrorHandler;