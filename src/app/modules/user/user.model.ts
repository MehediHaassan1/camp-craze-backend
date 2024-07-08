import { model, Schema } from "mongoose";
import { TAddress, TName, TUser } from "./user.interface";
import { userGender, userRole } from "./user.constant";

const nameSchema = new Schema<TName>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
});

const addressSchema = new Schema<TAddress>({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
})


const userSchema = new Schema<TUser>({
    name: nameSchema,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: userRole,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: addressSchema,
    gender: {
        type: String,
        enum: userGender,
        required: true
    },
    profilePicture: {
        type: String
    }
}, { timestamps: true });

// Define mongoose model
const User = model<TUser>('User', userSchema);

export default User;
