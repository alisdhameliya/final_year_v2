import React from "react";

export const CloseSVG = ({ fillColor = "#400", className = "", ...props }) => (
    <svg
        fill={fillColor}
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
        height={props?.height || 20}
        width={props?.width || 20}
        viewBox={`0 0 ${props?.width || 20} ${props?.height || 20}`}
    >
        <path d="M 4.70703 3.29297 L 3.29297 4.70703 L 11.4141 12 L 3.29297 19.293 L 4.70703 20.707 L 12 13.4141 L 19.293 20.707 L 20.707 19.293 L 13.4141 12 L 20.707 4.70703 L 19.293 3.29297 L 12 10.5859 L 4.70703 3.29297Z" />
    </svg>
);
