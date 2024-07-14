import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    description: {
        type: String,
        required: true,
        minlength: [100, "[Description] must be at least 100 characters long"],
        maxlength: [300, "[Description] cannot exceed 300 characters"]
    },
    category: { type: String, required: true },
    ratings: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    coverImage: { type: String, required: true },
    images: { type: [String], default: [] },
    isDeleted: {
        type: Boolean,
        default: false,
        required: true
    },
    tag: { type: String, required: true }
}, { timestamps: true });

//? find all products those are not deleted
productSchema.pre('find', async function (next) {
    this.find({ isDeleted: { $ne: true } })
    next();
})

// find single product that is not deleted
productSchema.pre('findOne', async function (next) {
    this.findOne({ isDeleted: { $ne: true } })
    next();
})

const Product = model<TProduct>('Product', productSchema);

export default Product;