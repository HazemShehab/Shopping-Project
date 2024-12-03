import {InputHTMLAttributes, Ref, forwardRef, memo} from "react"

interface Iprops extends InputHTMLAttributes<HTMLInputElement> {};

//forwardRef => passing ref from parent to child component
const Input = forwardRef(({...rest} : Iprops, ref: Ref<HTMLInputElement>) => {
    return (
        <input 
        ref={ref}
        className="border-[1px] border-gray-300 shadow-md
        focus:border-indigo-500 focust-outline-none focus:ring-1
        focus:ring-indigo-500 rounded-lg px-3 py-3 text-md" 
        {...rest} 
      />
    );
});

export default memo(Input);