import { FC } from "react";
import { FieldInterface } from "../../../typescript";

const Textarea: FC<FieldInterface> = ({ ...props }) => {
  return <textarea {...props}></textarea>;
};

export default Textarea;
