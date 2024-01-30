import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const LinkStyle = cva(["text-center px-6 py-2"],{
    variants: {
        variant: {
            primarySolid: ["bg-HLPCS-pink text-white"],
            primaryOutlined: ["border-2", "border-HLPCS-light-pink", "text-HLPCS-pink"],
        },
        borderRadius: {
            sm:[],
            md:[],
            lg:["rounded-full"],
        },
        size: {
            sm: ["text-sm"],
            md: ["text-base"],
            lg: ["text-xl"],
        }
    },
    compoundVariants: [{
        variant: 'primarySolid',
        size: 'md',
        className: ''
    }],
    defaultVariants: {
        variant: 'primarySolid',
        size: 'md'
    }
})

type LinkType = VariantProps<typeof LinkStyle>&ComponentProps<"a">&{
    children: React.ReactNode
}

const LinkCVA = ({variant,borderRadius, size, className, children, ...props}: LinkType)=>{
    return(<a {...props} className={twMerge(LinkStyle({variant,borderRadius, size,}),className)}>
        {children}
    </a>)
}

export default LinkCVA
