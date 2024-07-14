export type TCartProduct = {
    coverImage: string;
    name: string;
    productId: string;
    price: number;
    stock: number;
    quantity: number;
}

export type TProducts = {
    products: TCartProduct[]
};


export type TUserName = {
    firstName: string;
    lastName: string;
}

export type TUserAddress = {
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}

export type TOrderData = {
    name: TUserName;
    email: string;
    phone: number;
    address: TUserAddress;
    orderedProducts: TCartProduct[];
    deliveryOption: string;
}
