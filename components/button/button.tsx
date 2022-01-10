import clsx from "clsx";
import React from "react";

type ButtonProps = {
    isLoading?: boolean;
    variant?: string
} & React.ComponentPropsWithoutRef<'button'>

const Button = ({ variant, children, ...restProps }: ButtonProps) => {
    return (
        <button
            className={clsx(
                'px-4 py-2 font-bold rounded',
                {
                    'bg-slate-500': variant === "red"
                },

            )}
            {...restProps}
        >{variant}</button>
    )
}

export default Button;