export type TProduct = {
    _id: string;
    name: string;
    price: number;
    stock: number;
    description: string;
    category: string;
    ratings: number;
    coverImage: string;
    images: string[];   
    isDeleted: boolean;
    tag: string;
}