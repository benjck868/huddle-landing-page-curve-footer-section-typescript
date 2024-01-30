import React, {ComponentProps } from "react";
import { twMerge } from "tailwind-merge";


type ButtonType = ComponentProps<"button">&{
    isOutlined: boolean
    children: React.ReactNode
    sendFunction?:()=>void
};
const Button = ({isOutlined, children, className}: ButtonType)=>{
    return(
        <button className={twMerge("text-center px-6 py-2", isOutlined ? ["border-2", "border-HLPCS-light-pink", "text-HLPCS-pink"] : [" bg-HLPCS-pink text-white rounded-full text-base"], className)}>
            {children}
        </button>
    )
}
export default Button;