import { ZodError } from "zod";
import { TErrorResponse } from "../interface";

const handleZodError = (error: ZodError): TErrorResponse => {
    const errorSources = error.issues.map((issue) => {
        return {
            path: issue.path[issue.path.length - 1],
            message: issue.message,
        }
    });
    const message = 'Validation error';
    const status = 400;
    return {
        status,
        message,
        errorSources,
    }
};

export default handleZodError;