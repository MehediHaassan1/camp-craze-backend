import mongoose from 'mongoose';

const cartProductSchema = new mongoose.Schema({
    coverImage: { type: String, required: true },
    name: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    quantity: { type: Number, required: true },
});

const userNameSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
});

const addressSchema = new mongoose.Schema({
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
});

const orderSchema = new mongoose.Schema({
    name: { type: userNameSchema, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: addressSchema, required: true },
    orderedProducts: { type: [cartProductSchema], required: true },
    deliveryOption: { type: String, required: true },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
