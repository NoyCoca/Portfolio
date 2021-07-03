import { useEffect, useRef, useState } from "react";
const Input = ({ type, placeholder, name, ref }) => {
  const inputRef = useRef();
  const [nameRef, setNameRef] = useState("Full name");
  useEffect(() => {
    if (inputRef.current.name == nameRef) inputRef.current.focus();
  });
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      ref={inputRef}
    />
  );
};
export default Input;
