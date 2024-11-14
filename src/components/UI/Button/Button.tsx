import { FC } from "react";
import { UIInterface } from "../../../typescript";

interface ButtonInterface extends UIInterface {
  children: React.ReactNode;
}

const Button: FC<ButtonInterface> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
