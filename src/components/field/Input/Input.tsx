import { FC } from "react";
import { FieldInterface } from "../../../typescript";

const Input: FC<FieldInterface> = props => {
  return <input {...props} />;
};

export default Input;
