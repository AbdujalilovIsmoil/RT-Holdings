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

export interface dataTypes {
  id: number;
  image: string;
  title_en: string;
  title_ko: string;
  title_ru: string;
  title_uz: string;
  description_en: string;
  description_ko: string;
  description_ru: string;
  description_uz: string;
}

export interface postDataTypes {
  name: string;
  text: string;
  email: string;
  service: string;
  phone_number: string;
}

export interface properties {
  title: string;
  text: string;
}

export interface globalAboutDataTypes {
  [key: string]: properties;
}

export interface ScoreDataType {
  [key: string]: {
    title: string;
    items: properties[];
  };
}
