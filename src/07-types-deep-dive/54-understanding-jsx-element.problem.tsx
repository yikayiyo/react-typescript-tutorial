/**
 * 1. What's the difference between JSX.Element,
 * React.ReactNode and React.ReactElement?
 *
 * CMD-click each of them to understand the difference.
 */
type ClickMe = React.ReactElement;
/*
interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
  type: T;
  props: P;
  key: Key | null;
}
*/ 
type ClickMeToo = JSX.Element;  // interface Element extends React.ReactElement<any, any> { }
type ClickMeThree = React.ReactNode;

/*
type ReactNode =
  | ReactElement
  | string
  | number
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined
  | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES];
*/

/**
 * 2. What is the return type of this Component?
 */
const Component = () => {
  return <div>Hello world</div>;
};

/**
 * 3. Fun fact - this might break on your IDE! In
 * TypeScript 5.0, this wouldn't work. But in TypeScript
 * 5.1, it DOES work.
 *
 * If it's not working for you, try making your IDE use
 * the 'workspace' version of TypeScript.
 *
 * https://stackoverflow.com/questions/39668731/what-typescript-version-is-visual-studio-code-using-how-to-update-it
 */
const Component2 = () => {
  return <div></div>;
};

<>
  <Component2 />
</>;

/**
 * 4a. Why does this component NOT error...
 */
const Component3 = () => {
  return <div></div>;
};

<>
  <Component3 />
</>;

/**
 * 4b. ...but this one does?
 */
const Component4 = (): React.ReactNode => {
  return "hello!";
};
