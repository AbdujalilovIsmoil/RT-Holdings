import { StringMap } from "../types";

export interface FieldInterface {
  name?: string;
  value?: string;
  required?: boolean;
  className?: string;
  placeholder?: string;
  onChange?: (_: ChangeEvent) => void;
  type?: "text" | "email" | "number" | "search";
}

export interface UIInterface {
  className?: string;
  onClick?: (_: ChangeEvent) => void;
  type?: "button" | "submit";
}

export interface ScoreDataType {
  [key: string]: {
    title: string;
    items: StringMap[];
  };
}
