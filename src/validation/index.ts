//  productObj === errorsObj (title, descreption, image, price)

export const productValidation = (product: {title:string, descreption:string, imageURL:string, price:string}) => {
    // Returns an object
    const errors: {title:string, descreption:string, imageURL:string, price:string} = {
        title: "",
        descreption: "",
        imageURL: "",
        price: "",
    }

    //Regular Expression
    const validURL = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);

    if(!product.title.trim() || product.title.length < 10 || product.title.length > 80) {
        errors.title = "Product title must be between 10 and 80 charcters";
    }

    if(!product.descreption.trim() || product.descreption.length < 10 || product.descreption.length > 80) {
        errors.descreption = "Product descreption must be between 10 and 900 charcters";
    }

    if(!product.imageURL.trim() || !validURL){
        errors.imageURL = "Valid image URL is required"
    }

    if(!product.price.trim() || isNaN(Number(product.price))){
        errors.price = "Valid price is required"
    }

    return errors;
}