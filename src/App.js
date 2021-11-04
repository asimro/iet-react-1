import React from 'react';

import './App.css';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { Transaction } from './components/Transaction';
import { TraxHistory } from './components/TraxHistory';
import { TraxSummary } from './components/TraxSummary';
import { GlobalProvider } from './context/GlobalState';



function App() {

  return (
    <GlobalProvider>

      <div className="container">
        <Header />
        <Balance />
        <TraxSummary />
        <TraxHistory />
        <Transaction />
      </div>

    </GlobalProvider>
  );
}

export default App;
