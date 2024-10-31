import  Button from "./components/UI/Button";
import ProductCard from "./components/ProductCard";
import Model from "./components/UI/Model";
import { categories, colors, formInputList, productList} from "./data"
import { ChangeEvent, FormEvent, useState } from 'react';
import Input from "./components/UI/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
import {v4 as uuid} from 'uuid';
import Select from "./components/UI/Select";
import { ProductNameTypes } from "./types";
import toast, { Toaster } from 'react-hot-toast';



const App = () => {
  const defaultProductObject = {
    title: "",
    descreption: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
      categoryName: ""
  }
};

 /*------------State------------*/
 const [products, setProducts] = useState <IProduct[]> (productList);
 const [product, setProduct] = useState <IProduct> (defaultProductObject);
 const [productToEdit, setProductToEdit] = useState<IProduct> (defaultProductObject);
 const [productToEditIdx, setProductToEditIdx] = useState<number> (0);
 const [errors, setErrors] = useState ({title: "", descreption: "", imageURL: "", price: ""});
 const [tempColors, setTempColors] =useState <string[]> ([]);
 const [isOpen, setIsOpen] = useState(false);
 const [isOpenEditModal, setIsOpenEditModal] = useState(false);
 const [isOpenConfirmModal, setIsConfirmModal] = useState(false);
 const [selectedCategory, setSelectedCategory] = useState(categories[0]);
 //console.log(productToEditIdx)
 //console.log("product to edit", productToEdit);
 //console.log(tempColors);
 //console.log("errors", errors);

   /*------------Handler------------*/
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const openEditModal = () => setIsOpenEditModal(true);
  const closeEditModal = () => setIsOpenEditModal(false);
  const openConfirmModal = () => setIsConfirmModal(true);
  const closeConfirmModal = () => setIsConfirmModal(false);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
  const {value, name} = event.target;

  setProduct ({
    ...product,
    [name]: value
  })

  setErrors({
    ...errors,
    [name]: ""
  })
 };

 const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
  const {value, name} = event.target;

  setProductToEdit ({
    ...productToEdit,
    [name]: value
  })

  setErrors({
    ...errors,
    [name]: ""
  })
 };

 const onCancel = () => {
   setProduct(defaultProductObject);
   close();
   closeEditModal();
 }
 
 const removeProductHandler = () => {
  const filtered = products.filter(product => product.id !== productToEdit.id);
  setProducts(filtered);
  closeConfirmModal();
  toast('Product has been deleted successfully✅', {
    duration: 3000,
    style: {
      backgroundColor: "black",
      color: "white"
    }
  });
 }

 const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
  event.preventDefault();
  const {title, descreption, imageURL, price} = product;

  const errors = productValidation({
    title,
    descreption,
    imageURL,
    price,
  });

  // Check if any property has a value of "" && Check if all properties have a value of ""
  const hasErrorMsg = Object.values(errors).some(value => value === "") && Object.values(errors).every(value => value === "");
  
  if (!hasErrorMsg) {
    setErrors(errors);
    return;
  }

  // console.log({...product, id: uuid(), colors:tempColors});
  setProducts(prev => [{...product, id: uuid(), colors: tempColors, category:selectedCategory,}, ...prev]);
  setProduct(defaultProductObject);
  setTempColors([]);
  toast('Product has been added successfully✅', {
    duration: 3000,
    style: {
      backgroundColor: "black",
      color: "white"
    }
  });
  close();
}

// To grap the product data when you press Edit
const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
  event.preventDefault();
  const {title, descreption, imageURL, price} = productToEdit;

  const errors = productValidation({
    title,
    descreption,
    imageURL,
    price,
  });

  // Check if any property has a value of "" && Check if all properties have a value of ""
  const hasErrorMsg = Object.values(errors).some(value => value === "") && Object.values(errors).every(value => value === "");
  
  if (!hasErrorMsg) {
    setErrors(errors);
    return;
  }

  const updateDProducts = [...products];
  updateDProducts[productToEditIdx] = {...productToEdit, colors:tempColors.concat(productToEdit.colors)};
  setProducts(updateDProducts);

  setProductToEdit(defaultProductObject);
  setTempColors([]);
  closeEditModal();
}

  /*------------Renders------------*/
  const renderProductList = products.map((product, idx) => 
      <ProductCard 
        key={product.id} 
        product={product} 
        setProductToEdit={setProductToEdit} 
        openEditModal={openEditModal}
        idx={idx}
        setProductToEditIdx={setProductToEditIdx}
        openConfirmModal={openConfirmModal}
      />
   )
  const renderFormInputList = formInputList.map(input => 
  <div className="flex flex-col" key={input.id}>
    <label htmlFor={input.id} className="mb-[2px] text-sm font-medium text-gray-700">{input.label}</label>
    <Input type="text" id={input.id} name={input.name} value={product[input.name]} onChange={onChangeHandler}/>
    <ErrorMessage msg = {errors[input.name]}/>
  </div>
  );

  const renderProductColors = colors.map(color => <CircleColor key={color} color={color} onClick={() => {
    if(tempColors.includes(color)){
      //Color Toggle
      setTempColors(prev => prev.filter(item => item !== color))
      return;
    }

    if(productToEdit.colors.includes(color)){
      //Color Toggle
      setTempColors(prev => prev.filter(item => item !== color))
      return;
    }
    setTempColors(prev => [...prev, color])
  }} />
);

  const renderProductEditWithErrorMsg = (id:string, label:string, name: ProductNameTypes) => {
    return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-[2px] text-sm font-medium text-gray-700">
        {label}
      </label>
      <Input type="text" id={id} name={name} value={productToEdit[name]} onChange={onChangeEditHandler}/>
      <ErrorMessage msg = {errors[name]}/>
    </div>
)};

    return (
        <main className="container">
          <div className="w-full p-3 mt-3 flex flex-col items-center">
            <Button className="bg-indigo-700 hover:bg-indigo-800 p-3 m-3" width={"w-fit"} onClick={open}>Add New Product</Button>
          </div>
          <div className="m-5 mt-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
            {renderProductList}
          </div>

        {/** Add Product Modal */}
          <Model isOpen={isOpen} close={close} title="Add A New Product">
              <form className="space-y-3" onSubmit={submitHandler}>
                {renderFormInputList}
                <Select selected={selectedCategory} setSelected={setSelectedCategory}/>

                <div className="flex items-center my-4 flex-wrap space-x-1">{renderProductColors}</div>

                <div className="flex items-center my-4 flex-wrap space-x-1">{
                  tempColors.map(color => (
                    <span key={color} className="p-1 mr-1 mb-1 text-xs rounded-md text-white" style={{backgroundColor: color}}>{color}</span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-3">
                  <Button className="bg-indigo-700 hover:bg-indigo-800 w-full">Submit</Button>
                  <Button className="bg-gray-400 hover:bg-gray-500 w-full" onClick={onCancel}>Cancel</Button>
                </div>
              </form>
            </Model>

          {/** Edit Product Modal */}
          <Model isOpen={isOpenEditModal} close={closeEditModal} title="Edit This Product">
            <form className="space-y-3" onSubmit={submitEditHandler}>
              {renderProductEditWithErrorMsg("title", "Product Title", "title")}
              {renderProductEditWithErrorMsg("descreption", "Product Descreption", "descreption")}
              {renderProductEditWithErrorMsg("imageURL", "Product Image URL", "imageURL")}
              {renderProductEditWithErrorMsg("price", "Product Price", "price")}

              <Select selected={productToEdit.category} setSelected={(value) => setProductToEdit({...productToEdit, category: value})}/>

              <div className="flex items-center my-4 flex-wrap space-x-1">{renderProductColors}</div>
              <div className="flex items-center my-4 flex-wrap space-x-1">{
                tempColors.concat(productToEdit.colors).map(color => (
                  <span key={color} className="p-1 mr-1 mb-1 text-xs rounded-md text-white" style={{backgroundColor: color}}>{color}</span>
                ))}
              </div>
              
              <div className="flex items-center space-x-3">
                <Button className="bg-indigo-700 hover:bg-indigo-800 w-full">Submit</Button>
                <Button className="bg-gray-400 hover:bg-gray-500 w-full" onClick={onCancel}>Cancel</Button>
              </div>
            </form>
          </Model>

          {/** Delete Product Confirm Modal */}
          <Model isOpen={isOpenConfirmModal} 
                 close={closeConfirmModal} 
                 title="Are you sure you want to remote this Product from your store?"
                 description="Deleting this product will remove it permanently from your inventory. Any associated data,
                 sales history, and other related information will also be deleted. Please make sure this is the intended
                 action."
                 >

                <div className="flex items-center space-x-3">
                  <Button className="bg-indigo-700 hover:bg-indigo-800 w-full" onClick={removeProductHandler}>Yes, remove</Button>
                  <Button className="bg-gray-400 hover:bg-gray-500 w-full" onClick={closeConfirmModal}>Cancel</Button>
                </div>
            </Model>
            
            <Toaster />

        </main>
    )
  };
export default App;