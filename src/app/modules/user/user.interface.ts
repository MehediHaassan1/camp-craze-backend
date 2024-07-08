export type TName = {
    firstName: string;
    lastName: string;
}

export type TAddress = {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}

// Extend mongoose Document for TypeScript
export type TUser = {
    name: TName;
    email: string;
    password: string;
    role: 'user' | 'admin';
    phoneNumber: string;
    address: TAddress;
    gender: 'male' | 'female' | 'other';
    profilePicture?: string;
}
