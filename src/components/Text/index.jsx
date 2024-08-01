import React from 'react'

function Text({ children, className, as, size = "md", ...restProps }) {
    const sizes = {
        xs: "text-[10px] font-normal",
        lg: "text-base font-medium",
        s: "text-xs font-medium",
        xl: "text-lg font-medium",
        md: "text-sm font-medium",
    };
    return (
        <p className={`text-gray-500 font-urbanlist ${className} ${sizes[size]}`}>
            {children}
        </p>
    )
}

export default Text