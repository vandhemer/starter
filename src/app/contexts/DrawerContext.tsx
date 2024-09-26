'use client'

import { createContext, useState, Dispatch, SetStateAction } from 'react';

type DrawerContextType = {
  toggleDrawer: boolean;
  setToggleDrawer: Dispatch<SetStateAction<boolean>>;
};

export const DrawerContext = createContext<DrawerContextType>({
  toggleDrawer: false,
  setToggleDrawer: () => {},
});

export const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  return (
    <DrawerContext.Provider value={{ toggleDrawer, setToggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};