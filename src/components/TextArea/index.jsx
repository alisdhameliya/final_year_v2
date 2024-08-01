import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-lg",
};

const variants = {
    tarGrey02: "border-gray-400 border border-solid",
};

const sizes = {
    xs: "h-[100px] p-4 text-sm",
};

const TextArea = React.forwardRef(
    (
        { className = "", name, placeholder, shape, size = "xs", variant = "tarGrey02", onChange, ...restProps },
        ref,
    ) => {
        const handleChange = (e) => {
            if (onChange) onChange(e?.target?.value);
        };

        return (
            <textarea
                ref={ref}
                className={`${className} ${(shape && shapes[shape]) || ""} ${sizes[size] || ""} ${variants[variant] || ""}`}
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                {...restProps}
            />
        );
    }
);

TextArea.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs"]),
    variant: PropTypes.oneOf(["tarGrey02"]),
};

export default TextArea;
