import React, { ComponentProps } from "react";

export const Button: React.FC<ComponentProps<"button">> = ({ className, ref, ...rest }) => {
  return (
    <button ref={ref} {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button ref={null} onClick={() => {}} type="button"></Button>;
};
