type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  shape?: "square" | "round";
  size?: "big" | "small";
  fill?: "dark" | "light";
  clicked?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  shape,
  fill,
  size,
  className,
  ...props
}) => {
  const classNames = `text-center font-bold transition duration-300 hover:opacity-60 ${
    fill === "dark"
      ? "bg-accent text-white"
      : fill === "light"
        ? "bg-primary text-white"
        : ""
  } ${size === "big" ? "px-2 py-1" : "text-[0.8rem] px-5 py-2"} ${
    shape === "round" ? "rounded-full" : "rounded-md"
  } ${className}`;

  return (
    <button className={classNames} type={props.type} {...props}>
      {props.children}
    </button>
  );
};
export default Button;
