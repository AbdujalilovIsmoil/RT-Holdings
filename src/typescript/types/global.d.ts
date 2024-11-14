export interface FieldInterface {
  type?: string;
  value: string;
  required: boolean;
  className: string;
  onChange: (e: unknown) => void;
}

export interface UIInterface {
  className: string;
  onClick?: () => void;
  type: "button";
}
