export interface IAddress {
    street: string;
    city: string;
    zipcode: string;
}

export interface ICompany {
    name: string;
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: number;
    city: string;
    company: ICompany;
    website: string;
    address: IAddress;
}

// export interface ITodo {
//     id: number;
//     title: string;
//     completed: boolean;
// }