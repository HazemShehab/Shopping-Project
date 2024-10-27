export interface IProduct{
    id?: string | undefined;
    title: string;
    descreption: string;
    imageURL: string;
    price: string;
    colors: string[];
    category:{
        name:string,
        imageURL:string
    }
}

export interface IFormInput {
    id: string,
    name: "title" | "descreption" | "imageURL" | "price";
    label: string,
    type: string
}