import { ImgHTMLAttributes } from "react";

interface Iprops extends ImgHTMLAttributes<HTMLImageElement>{
    imageURL: string;
    alt: string;
    className: string,
    
}

const Image = ({imageURL, alt, className, ...rest} : Iprops) => {
    return (
        <img src={imageURL} alt={alt} className={className} {...rest}/>
    )
};

export default Image;