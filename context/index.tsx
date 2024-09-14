"use client";

import { useContext, createContext, ReactNode, useState } from "react";

type AppContextTypes = {
  isVisibleOnMobile: boolean;
  setIsVisibleOnMobile: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = createContext<AppContextTypes>({
  isVisibleOnMobile: false,
  setIsVisibleOnMobile: () => {},
});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [isVisibleOnMobile, setIsVisibleOnMobile] = useState(false);

  const value = {
    isVisibleOnMobile,
    setIsVisibleOnMobile,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
