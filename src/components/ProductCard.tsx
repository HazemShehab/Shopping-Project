import { IProduct } from "../interfaces";
import { textSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./UI/Button";

interface Iprops {
    product: IProduct;
}

const ProductCard = ({product} : Iprops) => {
    const {title, descreption, imageURL, price, category} = product;

    return (
        <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex-col">
            <Image 
               imageURL={imageURL}
               alt={"product name"} 
               className="rounded-md mb-2"
            />

            <h3>{title}</h3>
            
            <p>{textSlicer(descreption)}</p>

            <div className="flex items-center my-4 space-x-2">
                <span className="w-5 h-5 bg-indigo-500 rounded-full cursor-pointer" />
                <span className="w-5 h-5 bg-yellow-500 rounded-full cursor-pointer" />
                <span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer" />
            </div>

            <div className="flex items-center justify-between">
                <span>{price}</span>
                <Image imageURL={category.imageURL} alt={category.name} className="w-10 h-10 rounded-full object-bottom"/>
            </div>

            <div className="flex items-center justify-between space-x-2">
                <Button className="bg-indigo-700 hover:bg-indigo-800" width="w-full">EDIT</Button>
                <Button className="bg-red-700 hover:bg-red-800" width="w-full">DELETE</Button>
            </div>
        </div>
    )
};

export default ProductCard;