import React from "react";

const sizes = {
    "3x1": "text-[34px] font-semibold md:text-[32px] sm:text-3xl",
    "2x1": "text-[32px] font-semibold md:text-3xl sm:text-[28px]",
    xl: "text-2x1 font-semibold md:text-[22px]",
    s: "text-base font-semibold",
    md: "text-lg font-semibold",
    xs: "text-sm font-semibold",
    lg: "text-xl font-semibold",
};

const Heading = ({ children, className = "", size = "s", as: Component = "h6", ...restProps }) => {
    return (
        <Component className={`text-black-900 font-urbanist ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export default Heading;
