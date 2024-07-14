import { z } from 'zod';

const cartProductSchema = z.object({
    coverImage: z.string().nonempty(),
    name: z.string().nonempty(),
    productId: z.string().nonempty(),
    price: z.number().nonnegative(),
    stock: z.number().int().nonnegative(),
    quantity: z.number().int().nonnegative(),
});

const userNameSchema = z.object({
    firstName: z.string().nonempty(),
    lastName: z.string().nonempty(),
});

const addressSchema = z.object({
    address: z.string().nonempty(),
    city: z.string().nonempty(),
    state: z.string().nonempty(),
    postalCode: z.string().nonempty(),
    country: z.string().nonempty(),
});

const orderValidationSchema = z.object({
    name: userNameSchema,
    email: z.string().email(),
    phone: z.string().nonempty(),
    address: addressSchema,
    orderedProducts: z.array(cartProductSchema),
    deliveryOption: z.string().nonempty(),
});

export default orderValidationSchema;
