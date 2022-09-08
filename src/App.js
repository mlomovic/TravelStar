import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Detalji from './pages/Detalji';
import Home from './pages/Home';
import Putovanja from './pages/Putovanja';

const App= () => {
  return (
    <div className="App">

      <Navbar/>
      <Home/>
      <Putovanja/>
      <Detalji/>
      <Dashboard/>
      
    </div>
  );
}

export default App;
