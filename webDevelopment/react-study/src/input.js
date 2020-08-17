import React, { useEffect, useRef } from "react";
// import "./styles.css";

// const Input = (props) => {
//   let { forwardedRef, ...otherProps } = props;
//   return <input {...otherProps} ref={forwardedRef} />;
// };

// const TextInput = React.forwardRef((props, ref) => (
//   <Input {...props} forwardedRef={ref} />
// ));

const FocusableInput = (e) => {
  const ref = useRef(null);

  useEffect(() => {
    if (e.focused === true) {
      ref.current.focus();
    }
  });

  return <input ref={ref} onChange={e.onChange} />;
};

export default FocusableInput;
