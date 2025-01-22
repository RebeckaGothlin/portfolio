type TextOwnProps<E extends React.ElementType> = {
    className: string;
    children?: React.ReactNode;
    as?: E;
  };
  
  //@ts-expect-error: Unused variable warning
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type TextProps<E extends React.ElementType> = TextOwnProps<E> &
    Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;
  
  export const Text = <E extends React.ElementType = "div">({
    className,
    children,
    as,
  }: TextOwnProps<E>) => {
    const Component = as || "div";
    return <Component className={className}>{children}</Component>;
  };