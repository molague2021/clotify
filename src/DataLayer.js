import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();
// children is referring to what is wrapped inside the DataLayer in the Index.js
export const DataLayer = ({ initialState, reducer, children }) => {
  return (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataLayerContext.Provider>
  );
};

export const useDataLayerValue = () => useContext(DataLayerContext);
