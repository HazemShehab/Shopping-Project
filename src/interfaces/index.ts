export interface IProduct {
    id?: string | undefined;
    title: string;
    descreption: string;
    imageURL: string;
    price: string;
    color: string[];
    category:{
        name:string,
        imageURL:string
    }
}

export interface IFormInput {
    id: string,
    name: string,
    label: string,
    type: string
}