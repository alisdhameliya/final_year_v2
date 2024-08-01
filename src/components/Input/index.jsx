import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[15px]",
};

const variants = {
  outline: {
    gray_400: "border-gray-400 border border-solid text-black-900",
    gray_300: "border-gray-300 border border-solid",
  },
  fill: {
    gray_50: "bg-gray-100 text-gray-600",
    white_A700: "bg-white-A700",
  },
};

const sizes = {
  sm: "h-[48px] p1-3.5 pr-[22px] text-sm",
  xs: "h-[36px] p1-3.5 pr-[35px] text-xs",
  md: "h-[52px] p1-4 pr-[35px] text-sm",
};

const Input = React.forwardRef(
  (
    {
      className,
      name = "",
      placeholder,
      type = "text",
      children,
      label,
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "md",
      color = "white_A700",
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      console.log(e.target.value);
      if (onChange) onChange(e.target.value);
    };

    return (
      <>
        <label
          className={`${className} flex items-center justify-center cursor-text ${(shape && shapes[shape]) || ""
            } ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""
            }`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </label>
      </>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "xs", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["gray_400", "gray_300", "gray_50", "white_A700"]),
};

export { Input };
