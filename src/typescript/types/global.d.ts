export type StringMap = Record<string, string>;

type Lang = "uz" | "ru" | "en" | "ko";

type MultiLangKey = `${MultiKey}_${Lang}`;

type CardImage = Record<"id" | "image", string>;

type ScalarKey = "id" | "year" | "price" | "distance";

type MultiKey = "name" | "model" | "color" | "location" | "fuel_type";

export type cardTypes = Record<ScalarKey | MultiLangKey, string> & {
  image: string;
};

export type StringInnerTypes = Record<string, StringMap | StaticImageData>;

type Lang = "uz" | "ru" | "en" | "ko";

type Properties = "title" | "description";

export type TitleField = `${Properties}_${Lang}`;

export type DescriptionField = `${Properties}_${Lang}`;

export type Items = Record<string, string> & {
  [K in TitleField]: string;
} & {
  [K in DescriptionField]: string;
} & {
  id: string;
  more: string;
  image: string;
  news_images: Record<string, string>[];
};

type ListItem = Record<"id", number> & Record<"title" | "path", string>;

type SectionData = Record<"pages" | "contactUs", string> & Record<"list", ListItem[]>;

export type sectionsTypes = Record<string, SectionData>;
