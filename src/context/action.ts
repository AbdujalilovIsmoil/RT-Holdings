import { storage } from "@/services";

const SET_LANG = (lang: string) => {
  storage.set("lang", lang);

  return {
    type: "SET_LANG",
    payload: lang,
  };
};

export { SET_LANG };
