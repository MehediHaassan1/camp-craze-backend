import { AnyZodObject } from "zod";
import catchAsync from "../utils/catchAsync";

const validateRequestHandler = (schema: AnyZodObject) => {
    return catchAsync(async (req, res, next) => {
        req.body = await schema.parseAsync(req.body);
        next();
    })
};

export default validateRequestHandler;