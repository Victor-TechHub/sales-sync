"use client";

import { useContext, createContext, ReactNode, useState } from "react";

type AppContextTypes = {
  isVisibleOnMobile: boolean;
  setIsVisibleOnMobile: React.Dispatch<React.SetStateAction<boolean>>;
  addProductSuccess: boolean;
  addProductFailed: boolean;
  handleAddProduct: () => void;
};

const AppContext = createContext<AppContextTypes>({
  isVisibleOnMobile: false,
  setIsVisibleOnMobile: () => {},
  addProductSuccess: false,
  addProductFailed: false,
  handleAddProduct: () => {},
});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [isVisibleOnMobile, setIsVisibleOnMobile] = useState(false);
  const [addProductSuccess, setAddProductSuccess] = useState(false);
  const [addProductFailed, setAddProductFailed] = useState(false);

  const handleAddProduct = () => {
    setTimeout(() => {
      setAddProductSuccess(true);
      setAddProductFailed(false);
    }, 1000);
  };

  const value = {
    isVisibleOnMobile,
    setIsVisibleOnMobile,
    addProductSuccess,
    addProductFailed,
    handleAddProduct,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
