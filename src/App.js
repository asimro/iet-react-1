import React from 'react';


import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { TraxSummary } from './components/TraxSummary';
import { TraxHistory } from './components/TraxHistory';
import { AddTrax } from './components/AddTrax';
import { ContextProvider } from './context/contextAPI';



function App() {

  return (
    
    <ContextProvider>
    <div className="container">
      <Header/>
      <Balance/>
      <TraxSummary/>
      <TraxHistory/>
      <AddTrax/>

    </div>
    </ContextProvider>
  );
}

export default App;
