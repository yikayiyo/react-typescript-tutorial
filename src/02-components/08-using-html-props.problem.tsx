import React, { ButtonHTMLAttributes } from "react";

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, ...rest }) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};
