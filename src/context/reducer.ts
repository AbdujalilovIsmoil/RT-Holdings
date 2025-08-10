import { storage } from "@/services";

interface reducerTypes {
  type: string;
  payload: string;
}

export interface initialValuesTypes {
  appLang?: string | null;
}

export const initialValues: initialValuesTypes = {
  appLang: storage.get("lang") || "uz",
};

export const reducer = (
  state = initialValues,
  action: reducerTypes,
): initialValuesTypes => {
  switch (action.type) {
    case "SET_LANG":
      return {
        ...state,
        appLang: action.payload,
      };
    default:
      return state;
  }
};
