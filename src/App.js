import {React, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Detalji from './pages/Detalji';
import Home from './pages/Home';
import Putovanja from './pages/Putovanja';
import NotFound from './pages/NotFound';

const App = () => {

  const [location, setLocation] = useState('/');

  return (

    <BrowserRouter>

      <div className="App">
          
          <Navbar location={location}/>

        <Routes>
          <Route path='/' element={<Home location={location} setLocation={setLocation}/>}/>
          <Route path='/putovanja' element={<Putovanja location={location} setLocation={setLocation}/>}/>
          <Route path='/detalji' element={<Detalji location={location} setLocation={setLocation}/>}>
            <Route path=":singleId" element={<Detalji />}/>
          </Route>
          <Route path='/dashboard' element={<Dashboard location={location} setLocation={setLocation}/>}/>
          <Route path='*' element={<NotFound />}/>

        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
