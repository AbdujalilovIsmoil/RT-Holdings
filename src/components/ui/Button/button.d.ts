import { ChangeEvent } from "react";
import type { UIInterface } from "../../../typescript/index";

interface ButtonInterface extends UIInterface {
  disabled: boolean;
  children: React.ReactNode;
}
