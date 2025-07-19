"use client";

import { createStore } from "redux";
import { reducer } from "./reducer";
import { Provider } from "react-redux";

export const store = createStore(reducer);

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
