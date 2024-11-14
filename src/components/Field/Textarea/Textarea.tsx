import { FC } from "react";
import { FieldInterface } from "../../../typescript";

interface Textarea extends FieldInterface {
  children: React.ReactNode;
}

const Textarea: FC<Textarea> = ({ children, ...props }) => {
  return <textarea {...props}>{children}</textarea>;
};

export default Textarea;
