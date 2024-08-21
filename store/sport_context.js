import {useState, useEffect, useContext, createContext} from 'react';

export const SportContext = createContext({});

export const SportProvider = ({children}) => {
  const value = {};
  return (
    <SportContext.Provider value={value}>{children}</SportContext.Provider>
  );
};
