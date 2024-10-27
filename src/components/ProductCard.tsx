import { IProduct } from "../interfaces";
import { textSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./UI/Button";

interface Iprops {
    product: IProduct;
}

const ProductCard = ({product} : Iprops) => {
    const {title, descreption, imageURL, price, category, colors} = product;

    /*------------Renders------------*/
    const renderProductColors = colors.map(color => <CircleColor key={color} color={color} />
    );

    return (
        <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex-col">
            <Image 
               imageURL={imageURL}
               alt={"product name"} 
               className="rounded-md mb-2"
            />

            <h3 className="text-lg font-semibold">{title}</h3>
            
            <p className="text-sm text-gray-500 break-words">{textSlicer(descreption)}</p>

            <div className="flex items-center my-4 flex-wrap space-x-1">{renderProductColors}</div>

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