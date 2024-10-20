import  Button from "./components/UI/Button";
import ProductCard from "./components/ProductCard";
import Model from "./components/UI/Model";
import {formInputList, productList} from "./data"
import { useState } from 'react';
import Input from "./components/UI/input";


const App = () => {
 /*------------State------------*/
  const [isOpen, setIsOpen] = useState(false)


   /*------------Handler------------*/
  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }


  /*------------Renders------------*/
  const renderProductList = productList.map(product => <ProductCard key={product.id} product={product} />)
  const renderFormInputList = formInputList.map(input => 
  <div className="flex flex-col">
    <label htmlFor={input.id} className="mb-[2px] text-sm font-medium text-gray-700">{input.label}</label>
    <Input type="text" id={input.id} name={input.name}/>
  </div>)

    return (
        <main className="container">
          <Button className="bg-indigo-700 hover:bg-indigo-800 w-full p-3" onClick={open}>Add</Button>
          <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
            {renderProductList}
          </div>
          <Model isOpen={isOpen} close={close} title="Add A New Product">
            <form className="space-y-3">
              {renderFormInputList}
              <div className="flex items-center space-x-3">
                <Button className="bg-indigo-700 hover:bg-indigo-800 w-full">Submit</Button>
                <Button className="bg-gray-400 hover:bg-gray-500 w-full">Cancel</Button>
              </div>
            </form>
          </Model>
        </main>
    )
};

export default App;