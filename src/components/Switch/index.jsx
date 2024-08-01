// import React from "react";
// import SwitchProvider from "@dhiwise/react-switch";
// import PropTypes from "prop-types";

// const sizes = {
//     xs: {
//         width: 48,
//         height: 24,
//     },
//     // Add more sizes here if needed
// };

// const Switch = ({
//     value = false,
//     className,
//     checkedIcon = <></>,
//     uncheckedIcon = <></>,
//     onChange,
//     size = "xs",
// }) => {
//     const [selected, setSelected] = React.useState(value);
//     const handleChange = (val) => {
//         setSelected(val);
//         onChange?.(val);
//     };

//     return (
//         <div className={className}>
//             <SwitchProvider
//                 checked={selected}
//                 onChange={handleChange}
//                 {...sizes[size]}
//                 checkedIcon={checkedIcon}
//                 uncheckedIcon={uncheckedIcon}
//             />
//         </div>
//     );
// };

// Switch.propTypes = {
//     value: PropTypes.bool,
//     className: PropTypes.string,
//     checkedIcon: PropTypes.node,
//     uncheckedIcon: PropTypes.node,
//     onChange: PropTypes.func,
//     size: PropTypes.oneOf(['xs']), // Dynamically get the size options from the sizes object
// };

// export default Switch;
