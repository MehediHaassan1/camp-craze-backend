import { z } from "zod";

const createProductValidationSchema = z.object({
    name: z.string().nonempty({ message: 'Name is required' }),
    price: z.number().positive({ message: "[Price] must be a positive number" }),
    stock: z.number().int().nonnegative({ message: "[Stock] must be a non-negative integer" }),
    description: z.string().min(100, { message: "[Description] must be at least 100 characters long" })
        .max(300, { message: "[Description] cannot exceed 300 characters" }),
    category: z.string().nonempty({ message: 'Category is required' }),
    ratings: z.number().min(1, { message: "[Ratings] must be at least 1" })
        .max(5, { message: "[Ratings] cannot exceed 5" }),
    coverImage: z.string().nonempty({ message: 'Cover image is required' }),
    images: z.array(z.string()).default([]),
    isDeleted: z.boolean().default(false),
    tag: z.string().nonempty({ message: 'Tag is required' }).default('new')
});

const updateProductValidationSchema = z.object({
    name: z.string({ required_error: 'Name is required' }).optional(),
    price: z.number({ required_error: 'Price is required' })
        .positive({ message: "[Price] must be a positive number" }).optional(),
    stock: z.number({ required_error: 'Stock is required' })
        .int()
        .nonnegative({ message: "[Stock] must be a non-negative integer" }).optional(),
    description: z.string({ required_error: 'Description is required' })
        .min(100, { message: "[Description] must be at least 100 characters long" })
        .max(300, { message: "[Description] cannot exceed 300 characters" }).optional(),
    category: z.string({ required_error: 'Category is required' }).optional(),
    ratings: z.number({ required_error: 'Rating is required' })
        .min(0, { message: "[Ratings] must be at least 0" })
        .default(0).optional(),
    coverImage: z.string({ required_error: 'Cover image is required' }).optional(),
    images: z.array(z.string({ required_error: 'Images is required' })).default([]).optional(),
});

export const validateProduct = {
    createProductValidationSchema,
    updateProductValidationSchema,
}