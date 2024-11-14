import { FC } from "react";
import { FieldInterface } from "../../../typescript";

interface SelectInterface extends FieldInterface {
  children: React.ReactNode;
}

const Select: FC<SelectInterface> = ({ children, ...props }) => {
  return <select {...props}>{children}</select>;
};

export default Select;
