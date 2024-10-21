import { ReactNode } from "react";

interface Iprops {
    children : ReactNode;
    className?: string;
    width?: "w-full" | "w-fit";
    onClick?: () => void;
}

const Button = ({children, className, width = "w-fit", ...rest} : Iprops) => {
    return (
        <button className = {`${className} ${width} rounded-lg text-white p-2`} {...rest}> {children} </button>
    )
};

export default Button;