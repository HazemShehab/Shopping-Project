import { ButtonHTMLAttributes, ReactNode, memo } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement>{
    children : ReactNode;
    className?: string;
    width?: "w-full" | "w-fit";
}

const Button = ({children, className, width = "w-full", ...rest} : Iprops) => {
    return (
        <button className = {`${className} ${width} rounded-lg text-white p-2 font-semibold`} {...rest}> 
            {children} 
        </button>
    )
};

export default memo(Button);