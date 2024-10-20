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