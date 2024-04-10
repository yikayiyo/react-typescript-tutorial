import { ComponentProps } from "react";
import { Equal, Expect } from "../helpers/type-utils";

type InputProps = {
  onChange: (value: string) => void;
} & Omit<React.ComponentProps<"input">, 'onChange'>;

export const Input = (
  props: InputProps
) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};

const Parent = () => {
  return (
    <Input
      onChange={(e) => {
        console.log(e);

        type test = Expect<Equal<typeof e, string>>;
      }}
    ></Input>
  );
};
