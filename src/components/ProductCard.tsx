import { IProduct } from "../interfaces";
import { textSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./UI/Button";

interface Iprops {
    product: IProduct,
    setProductToEdit: (product: IProduct) => void,
    openEditModal: () => void,
    idx: number,
    setProductToEditIdx: (value: number) => void,
    openConfirmModal: () => void,
}

const numberWithCommas = (x:string) => {
    x = x.toString();
    const pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(x))
          x = x.replace(pattern, "$1,$2");
      return x;
    }
    // console.log(numberWithCommas(9000))

const ProductCard = ({product, setProductToEdit, openEditModal, idx, setProductToEditIdx, openConfirmModal} : Iprops) => {
    const {title, descreption, imageURL, price, category, colors} = product;

    /*------------Renders------------*/
    const renderProductColors = colors.map(color => <CircleColor key={color} color={color} />
    );

    /*------------Handler------------*/
    const onEdit = () => {
        setProductToEdit(product);
        openEditModal();
        setProductToEditIdx(idx)
    }

    const onRemove = () => {
        setProductToEdit(product);
        openConfirmModal();
    }

    return (
        <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex-col space-y-3">
            <Image 
               imageURL={imageURL}
               alt={"product name"} 
               className="rounded-md" style={{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                WebkitBackgroundSize: "cover",
                backgroundSize: "cover",
                height: "40vh",
                display: "flex",
               }} 
            />

            <h3 className="text-lg font-semibold">{title}</h3>
            
            <p className="text-sm text-gray-500 break-words">{textSlicer(descreption)}</p>

            <div className="flex items-center my-4 flex-wrap space-x-1">
            {(!colors.length)? <p className="min-h-[20px]">Not available colors!</p> : renderProductColors}
            </div>

            <div className="flex flex-row items-center justify-between">
                <span className="basis-1/2 text-blue-600">{`$${numberWithCommas(price)}`}</span>
                <span className="basis-1/7 text-sm ml-4">{category.categoryName}</span>
                <Image imageURL={category.imageURL} alt={category.name} className="w-10 h-10 rounded-full object-bottom basis-1/8"/>
            </div>

            <div className="flex items-center justify-between space-x-2">
                <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={onEdit}>EDIT</Button>
                <Button className="bg-red-700 hover:bg-red-800" onClick={onRemove}>Remove</Button>
            </div>
        </div>
    )
};

export default ProductCard;