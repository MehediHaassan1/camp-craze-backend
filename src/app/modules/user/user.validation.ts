import { z } from 'zod';
import { userGender, userRole } from './user.constant';

// Define the Zod schema for the nested name schema
const nameValidationSchema = z.object({
    firstName: z.string({ required_error: 'First Name is required' }),
    lastName: z.string({ required_error: 'Last Name is required' }),
});

const addressValidationSchema = z.object({
    street: z.string({ required_error: 'Street is required' }),
    city: z.string({ required_error: 'City is required' }),
    state: z.string({ required_error: 'State is required' }),
    postalCode: z.string({ required_error: 'Postal code is required' })
        .refine(value => /^\d{4}$/.test(value), {
            message: 'Postal code must be exactly 4 digits',
        })
        .refine(value => /^\d+$/.test(value), {
            message: 'Postal code must only contain numeric digits',
        }),
    country: z.string({ required_error: 'Country is required' }),
});

// Define the Zod schema for the user schema
export const UserSchema = z.object({
    name: nameValidationSchema,
    email: z.string({ required_error: 'Email is required' }).email(),
    password: z.string({ required_error: 'Password is required' })
        .min(8, 'Password must be at least 8 characters long')
        .max(20, 'Password cannot exceed 20 characters'),
    role: z.string()
        .refine(value => userRole.includes(value), {
            message: '[Role] must be either "user" or "admin"'
        }),
    phoneNumber: z.string(),
    address: addressValidationSchema,
    gender: z.string()
        .refine(value => userGender.includes(value), {
            message: '[Gender] must be either "male", "female", or "other"'
        }),
    profilePicture: z.string().optional(),
});
