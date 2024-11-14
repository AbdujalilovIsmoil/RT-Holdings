import { FC } from "react";
import { FieldInterface } from "../../../typescript";

interface InputInterface extends FieldInterface {}

const Input: FC<InputInterface> = (props) => {
  return <input {...props} />;
};

export default Input;
