import { ComponentProps } from "react";
import { Equal, Expect } from "../helpers/type-utils";

type ButtonProps = Omit<ComponentProps<"button">, 'type'> & {
  type: 'button' 

};

const buttonProps: ButtonProps = {
  type: "button",
  //@ts-expect-error
  illegalProperty: "I AM ILLEGAL",
};

<>
  <button {...buttonProps}>Click Me!</button>
</>;

const buttonPropType = buttonProps.type;

type test = Expect<Equal<typeof buttonPropType, "button">>;
