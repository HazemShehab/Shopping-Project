import  Button from "./components/UI/Button";
import ProductCard from "./components/ProductCard";
import Model from "./components/UI/Model";
import {formInputList, productList} from "./data"
import { ChangeEvent, FormEvent, useState } from 'react';
import Input from "./components/UI/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";


const App = () => {
  const defaultProductObject = {
    title: "",
    descreption: "",
    imageURL: "",
    price: "",
    color: [],
    category: {
      name: "",
      imageURL: ""
  }
};

 /*------------State------------*/
 const [product, setProduct] = useState <IProduct> (defaultProductObject);
 const [errors, setErrors] = useState ({title: "", descreption: "", imageURL: "", price: ""});
 const [isOpen, setIsOpen] = useState(false);

 console.log("errors", errors);

   /*------------Handler------------*/
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
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

 const onCancel = () => {
   setProduct(defaultProductObject);
   close();
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

  console.log("Send this product to our server");
}


  /*------------Renders------------*/
  const renderProductList = productList.map(product => <ProductCard key={product.id} product={product} />)
  const renderFormInputList = formInputList.map(input => 
  <div className="flex flex-col" key={input.id}>
    <label htmlFor={input.id} className="mb-[2px] text-sm font-medium text-gray-700">{input.label}</label>
    <Input type="text" id={input.id} name={input.name} value={product[input.name]} onChange={onChangeHandler}/>
    <ErrorMessage msg = {errors[input.name]}/>
  </div>
  );

    return (
        <main className="container">
          <Button className="bg-indigo-700 hover:bg-indigo-800 w-full p-3" onClick={open}>Add</Button>
          <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
            {renderProductList}
          </div>
          <Model isOpen={isOpen} close={close} title="Add A New Product">
            <form className="space-y-3" onSubmit={submitHandler}>
              {renderFormInputList}
              <div className="flex items-center space-x-3">
                <Button className="bg-indigo-700 hover:bg-indigo-800 w-full">Submit</Button>
                <Button className="bg-gray-400 hover:bg-gray-500 w-full" onClick={onCancel}>Cancel</Button>
              </div>
            </form>
          </Model>
        </main>
    )
};

export default App;