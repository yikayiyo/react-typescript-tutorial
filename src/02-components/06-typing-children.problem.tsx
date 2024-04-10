import React from "react";

export const Button = (props: React.PropsWithChildren) => {
  return <button>{props.children}</button>;
};

const Parent = () => {
  return (
    <>
      <Button></Button>
      <Button>Hello world!</Button>
    </>
  );
};
