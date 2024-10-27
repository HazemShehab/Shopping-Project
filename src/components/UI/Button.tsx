import { ButtonHTMLAttributes, ReactNode } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement>{
    children : ReactNode;
    className?: string;
    width?: "w-full" | "w-fit";
}

const Button = ({children, className, width = "w-fit", ...rest} : Iprops) => {
    return (
        <button className = {`${className} ${width} rounded-lg text-white p-2`} {...rest}> {children} </button>
    )
};

export default Button;