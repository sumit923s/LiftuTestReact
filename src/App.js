import './App.css';
import React from 'react';
import { AppContextProvider } from './Components/context';
import AppLayout from './Components/AppLayout';
function App() {
 
  return (
    <AppContextProvider>
      <h1>Weather Widget</h1>
      <AppLayout />
    </AppContextProvider>
  );
}

export default App;

 
