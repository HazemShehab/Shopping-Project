// import {v4 as uuid} from "uuid";
import {IProduct} from "../interfaces";

export const productList: IProduct[] = [
    {
        // id: uuid(),
        title: "Iphone 7 2022",
        descreption: "The pocket-sized phone is powered by the Apple A10 Fusion chip, a 4-core processor, and 2GB of RAM. You can choose whether to opt for 32GB, 128GB, or 256GB of internal storage",
        imageURL:"/images/image_1.jpg",
        price: "$100",
        color: ["#FF0032", "#2563EB", "FF6E31"],
        category: {
            name: "Smart Phons",
            imageURL:"/images/image_1.jpg"
        }
    },
    {
        // id: uuid(),
        title: "Nike Shoes",
        descreption: "Nike Air is our iconic innovation that uses pressurized air in a durable, flexible membrane to provide lightweight cushioning",
        imageURL:"/images/image_2.jpg",
        price: "$15",
        color: ["#FF0032", "#FF0032", "FF6E31"],
        category: {
            name: "shoes",
            imageURL:"/images/image_2.jpg",
        }
    },
    {
        // id: uuid(),
        title: "Nike shoes",
        descreption: "Sport Nike shoes. Today we use Nike Air in a variety of performance shoes (like running and basketball)",
        imageURL:"/images/image_3.jpg",
        price: "$9",
        color: ["#FF0032", "#2563EB", "FF6E31"],
        category: {
            name: "shoes",
            imageURL:"/images/image_3.jpg"
        }
    },
    {
        // id: uuid(),
        title: "Samsung Galaxy phone",
        descreption: "Samsung Galaxy devices are made up of highly innovative Android smartphones and tablets that are created and developed with you in mind",
        imageURL:"/images/image_4.jpg",
        price: "$90",
        color: ["#FF0032", "#2563EB", "FF6E31"],
        category: {
            name: "Smart Phons",
            imageURL:"/images/image_4.jpg"
        }
    },
    {
        // id: uuid(),
        title: "Labtob Mac",
        descreption: "8-core CPU with 4 performance cores and 4 efficiency cores, Hardware-accelerated H.264, HEVC, ProRes, and ProRes RAW",
        imageURL:"/images/image_5.jpg",
        price: "$120",
        color: ["#FF0032", "#2563EB", "FF6E31"],
        category: {
            name: "Labtob Mac",
            imageURL:"/images/image_5.jpg"
        }
    },
    {
        // id: uuid(),
        title: "Labtob Samsung",
        descreption: "Laptops within the Galaxy Book3 series feature 13th Gen Intel® Core™ processors, lightweight design features and incredibly immersive displays. They are optimised for creating, multitasking and gaming. Released in February 2023",
        imageURL:"/images/image_6.jpg",
        price: "$110.00",
        color: ["#FF0032", "#2563EB", "FF6E31"],
        category: {
            name: "Labtob Samsung",
            imageURL:"/images/image_6.jpg"
        }
    },
    {
        // id: uuid(),
        title: "Apple Watch",
        descreption: "44mm or 40mm aluminum case, Retina display up to 1000 nits, High and low heart rate notifications Irregular rhythm notifications2 Low cardio fitness notifications",
        imageURL:"/images/image_7.jpg",
        price: "$100.00",
        color: ["#FF0032", "#2563EB", "FF6E31"],
        category: {
            name: "Apple Watch",
            imageURL:"/images/image_7.jpg"
        }
    },
]