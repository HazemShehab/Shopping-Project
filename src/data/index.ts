import {v4 as uuid} from "uuid";
import {ICategory, IFormInput, IProduct} from "../interfaces";

export const productList: IProduct[] = [
    {
        id: uuid(),
        title: "Iphone 16 Pro Max",
        descreption: "The pocket-sized phone is powered by the Apple A10 Fusion chip, a 4-core processor, and 2GB of RAM. You can choose whether to opt for 32GB, 128GB, or 256GB of internal storage",
        imageURL:"https://m.media-amazon.com/images/I/61bMJdgeryL.__AC_SX300_SY300_QL70_ML2_.jpg",
        price: "1699",
        colors: ["#bbab5e", "#e9dddd", "#000000"],
        category: {
            name: "Iphone",
            imageURL:"https://images.pexels.com/photos/26550485/pexels-photo-26550485/free-photo-of-close-up-of-an-iphone-7.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            categoryName: "Iphone"
        }
    },
    {
        id: uuid(),
        title: "Nike Shoes",
        descreption: "Nike Air is our iconic innovation that uses pressurized air in a durable, flexible membrane to provide lightweight cushioning",
        imageURL:"https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: "79",
        colors: ["#d71818", "#664b54", "#dfcfcf", "#28d7cf", "#000000"],
        category: {
            name: "shoes",
            imageURL:"https://m.media-amazon.com/images/I/51Wdzl8lU9L._AC_SY695_.jpg",
            categoryName: "Shoes"
        }
    },
    {
        id: uuid(),
        title: "Addidas shoes",
        descreption: "Sport Addidas shoes. Today we use Nike Air in a variety of performance shoes (like running and basketball)",
        imageURL:"https://images.pexels.com/photos/684152/pexels-photo-684152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: "85",
        colors: ["#3daab5", "#abb6b7", "#000000"],
        category: {
            name: "shoes",
            imageURL:"https://m.media-amazon.com/images/I/51Wdzl8lU9L._AC_SY695_.jpg",
            categoryName: "Shoes"
        }
    },
    {
        id: uuid(),
        title: "Samsung Galaxy S24",
        descreption: "Samsung Galaxy devices are made up of highly innovative Android smartphones and tablets that are created and developed with you in mind",
        imageURL:"https://m.media-amazon.com/images/I/61B9dpnaBDL._AC_SX679_.jpg",
        price: "1379",
        colors: ["#362d51", "#8b7abf", "#5226d7", "#000000"],
        category: {
            name: "Samsung",
            imageURL:"/images/image_4.jpg",
            categoryName: "Samsung"
        }
    },
    {
        id: uuid(),
        title: "Samsung",
        descreption: "Samsung 27 inch odyssey g5 gaming monitor with 1000r curved screen, 144hz, 1ms, freesync premium, qhd (lc27g55tqwmxzn), black",
        imageURL:"https://m.media-amazon.com/images/I/71l3vEp4Z2S._AC_SX522_.jpg",
        price: "120",
        colors: ["#dddddd", "#3C2A21", "#000000"],
        category: {
            name: "Desktop",
            imageURL:"https://images-cdn.ubuy.co.in/65f1abea6f15032e663e11fe-dell-optiplex-7040-desktop-computer-pc.jpg",
            categoryName: "Desktop"
        }
    },
    {
        id: uuid(),
        title: "Labtob Samsung",
        descreption: "Laptops within the Galaxy Book3 series feature 13th Gen Intel® Core™ processors, lightweight design features and incredibly immersive displays. They are optimised for creating, multitasking and gaming. Released in February 2023",
        imageURL:"/images/image_6.jpg",
        price: "110",
        colors: ["#d78f8f", "#dd0d0d", "#4d1818"],
        category: {
            name: "Desktop",
            imageURL:"https://images-cdn.ubuy.co.in/65f1abea6f15032e663e11fe-dell-optiplex-7040-desktop-computer-pc.jpg",
            categoryName: "Desktop"
        }
    },
    {
        id: uuid(),
        title: "Apple Watch",
        descreption: "44mm or 40mm aluminum case, Retina display up to 1000 nits, High and low heart rate notifications Irregular rhythm notifications2 Low cardio fitness notifications",
        imageURL:"https://m.media-amazon.com/images/I/71mFHvSCpBL.__AC_SX300_SY300_QL70_ML2_.jpg",
        price: "100",
        colors: ["#bbab5e", "#000000"],
        category: {
            name: "Smart Watch",
            imageURL:"https://images.pexels.com/photos/296951/pexels-photo-296951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            categoryName: "Smart Watch"
        }
    },
];

export const formInputList: IFormInput[] = [
    {
        id: "title",
        name: "title",
        label: "Product Title",
        type: "text"
    },
    {
        id: "descreption",
        name: "descreption",
        label: "Product Descreption",
        type: "text"
    },
    {
        id: "image",
        name: "imageURL",
        label: "Product Image URL",
        type: "text"
    },
    {
        id: "price",
        name: "price",
        label: "Product Price",
        type: "text"
    },
]

export const colors: string[] = [
    "#a855f7",
    "#2563eb",
    "#84D2C5",
    "#13005A",
    "#A31ACB",
    "#FF6E31",
    "#3C2A21",
    "#6C4AB6",
    "#CB1CBD",
    "#000000",
    "#645CBB",
    "#1F8A70",
    "#820000",
    "#FF0032",
]

export const categories: ICategory[] = [
  {
    id: uuid(),
    name: "Iphone",
    imageURL: "https://images.pexels.com/photos/26550485/pexels-photo-26550485/free-photo-of-close-up-of-an-iphone-7.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    categoryName: "Iphone"
  },
  {
    id: uuid(),
    name: "Samsung",
    imageURL: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    categoryName: "Samsung"
  },
  {
    id: uuid(),
    name: "Shoes",
    imageURL: "https://m.media-amazon.com/images/I/51Wdzl8lU9L._AC_SY695_.jpg",
    categoryName: "Shoes"
  },
  {
    id: uuid(),
    name: "Clothes",
    imageURL: "https://m.media-amazon.com/images/I/61IrEgdqMZL._AC_SY500_.jpg",
    categoryName: "Clothes"
  },
  {
    id: uuid(),
    name: "Desktop",
    imageURL: "https://images-cdn.ubuy.co.in/65f1abea6f15032e663e11fe-dell-optiplex-7040-desktop-computer-pc.jpg",
    categoryName: "Desktop"
  },
  {
    id: uuid(),
    name: "Smart Watch",
    imageURL: "https://images.pexels.com/photos/296951/pexels-photo-296951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    categoryName: "Smart Watch"
  },
]