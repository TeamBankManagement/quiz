'use client'
import { createContext, useState, useEffect, useRef } from "react";



//step1
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [qno,setQno]=useState(1);
  const value = {
    qno,setQno
  };

  //step2
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
