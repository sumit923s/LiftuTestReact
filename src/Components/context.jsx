
import React from 'react';
import { createContext, useContext } from 'react';
import { useState } from 'react';


const AppData = {
  city: '',
  zipcode: '',
  temperature: 0,
};
type AppData = typeof AppData;


const AppState = {
  Searches: [] as AppData[],
  error: null as string | null,
};
type AppState = typeof AppState;


const AppContext = {
  state: AppState,
  pushSearch: (data: AppData) => {},
  resetError: () => {},
};
type AppContext = typeof AppContext;

const AppContext = createContext();

// Design hook to conssume the context
export const usepushContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('Insert Input Carefullly');
  }
  return context;
};

//Exporing the Context provider
export const AppContextProvider = ({ children }) => {
  
  const [Searches, setSearches] = useState([]);
  const [error, setError] = useState(null);



  const resetError = () => {
    setError(null);
  };

  const pushSearch = (data: AppData) => {

    // used to show upto 3 searches only.
    setSearches([data, ...Searches.slice(0, 2)]);
    setError(null);
  };


  // Provididing the context value to children
  return (
<AppContext.Provider value={{ state, pushSearch, resetError }}>
  {children}
</AppContext.Provider>

  );
};
