export interface FieldInterface {
  value?: string;
  required?: boolean;
  className?: string;
  placeholder?: string;
  onChange?: (e: unknown) => void;
  type?: "text" | "email" | "number" | "search";
}

export interface UIInterface {
  className: string;
  onClick?: () => void;
  type?: "button" | "submit";
}
