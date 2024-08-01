import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-[14px]",
    circle: "rounded-[50%]",
};

const variants = {
    outline: {
        white_A700: "border-white-A700 border-[0.5px] border-solid text-white-A700",
        gray_900_01: "border-gray-900_01 border-[0.5px] border-solid text-gray-900_01",
        gray_100: "border-gray-100 border-[0.5px] border-solid text-black-900",
    },
    fill: {
        gray_100: "bg-gray-100 text-gray-500",
        green_600_01: "bg-green-600_01 text-white-A700",
        gray_900_26: "bg-gray-900_26",
        white_A700: "bg-white-A700 text-gray-900_01",
        gray_50: "bg-gray-50 text-black-900",
        gray_900_01: "bg-gray-900_01 text-white-A700",
    },
};

const sizes = {
    lg: "h-[36px] px-2",
    "4xl": "h-[48px] px-[13px]",
    "2xl": "h-[44px] px-[9px] text-xl",
    "3xl": "h-[44px] px-[17px] text-sm",
    xl: "h-[42px] px-2.5",
    "5xl": "h-[52px] px-3.5",
    "6xl": "h-[52px] px-[17px] text-base",
    md: "h-[32px] px-3.5 text-xs",
    xs: "h-[28px] px-2 text-xs",
    sm: "h-[30px] px-1.5",
};

const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "sm",
    color = "gray_900_26",
    ...restProps
}) => {
    return (
        <button
            className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""}}
            ${(variant && variants[variant]?.[color]) || ""} `}
            {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["round", "circle"]),
    size: PropTypes.oneOf([
        "lg", "4xl", "2xl", "3xl", "xl", "5xl", "6xl", "md", "xs", "sm",
    ]),
    variant: PropTypes.oneOf(["outline", "fill"]),
    color: PropTypes.oneOf([
        "white_A700", "gray_900_01", "gray_100", "green_600_01", "gray_900_26", "gray_50",
    ]),
};

Button.defaultProps = {
    className: "",
    leftIcon: null,
    rightIcon: null,
    shape: "round",
    size: "sm",
    variant: "fill",
    color: "gray_900_26",
};

export default Button;
