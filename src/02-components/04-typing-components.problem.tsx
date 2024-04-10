import React from "react";

type TButtonProps = {
  className?: string;
}

export const Button = (props: TButtonProps) => {
  return <button className={props.className}></button>;
};

const Parent = () => {
  return (
    <>
      <Button></Button>
      <Button className="my-class"></Button>
    </>
  );
};
