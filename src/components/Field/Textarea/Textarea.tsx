import { FC } from "react";
import { FieldInterface } from "../../../typescript";

interface Textarea extends FieldInterface {}

const Textarea: FC<Textarea> = ({ ...props }) => {
  return <textarea {...props}></textarea>;
};

export default Textarea;
