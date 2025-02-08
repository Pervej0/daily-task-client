"use client";

import { store } from "@/redux/store";
import React, { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";

const Providers = ({ children }: { children: ReactNode }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default Providers;
