import { React, useState } from 'react';
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
  const [searchDest, setSearchDest] = useState('');
  const [sortiranje, setSortiranje] = useState('');
  const [putovanja, setPutovanja] = useState([
    {
      destinacija: 'Dominikana',
      naslov: 'Predivno mesto za odmor sa umirujucim vibracijama...',
      opis: 'dominikana je ostrvo u Pacifiku poznato po svojim plazama mestima za odmor i ccigarama...',
      img: 'dominikana.jpg',
      datumPolaska: '2023-10-05',
      cena: 2500,
      ocena: 5
    },
    {
      destinacija: 'Engleska',
      naslov: 'Predivan spoj istorije i kulture',
      opis: 'London je prestonica engleske i cele Velike Britanije i tako dalje i tako dalje...',
      img: 'engleska.jpg',
      datumPolaska: '2023-05-25',
      cena: 750,
      ocena: 4
    },
    {
      destinacija: 'Indonezija',
      naslov: 'Predivno mesto za odmor sa umirujucim vibracijama...',
      opis: 'dominikana je ostrvo u Pacifiku poznato po svojim plazama mestima za odmor i ccigarama..',
      img: 'indonezija.jpg',
      datumPolaska: '2023-09-25',
      cena: 1800,
      ocena: 5
    },
    // {
    //   destinacija: 'Italija',
    //   naslov: 'Predivno mesto za odmor sa umirujucim vibracijama...',
    //   opis: 'dominikana je ostrvo u Pacifiku poznato po svojim plazama mestima za odmor i ccigarama..',
    //   img: 'italija.jpg',
    //   datumPolaska: '2023-03-03',
    //   cena: 450,
    //   ocena: 4
    // },
    // {
    //   destinacija: 'Maldivi',
    //   naslov: 'Predivno mesto za odmor sa umirujucim vibracijama...',
    //   opis: 'dominikana je ostrvo u Pacifiku poznato po svojim plazama mestima za odmor i ccigarama..',
    //   img: 'maldivi.jpg',
    //   datumPolaska: '2023-07-05',
    //   cena: 2000,
    //   ocena: 5
    // },
    // {
    //   destinacija: 'Dubai',
    //   naslov: 'Predivno mesto za odmor sa umirujucim vibracijama...',
    //   opis: 'dominikana je ostrvo u Pacifiku poznato po svojim plazama mestima za odmor i ccigarama..',
    //   img: 'uae.jpg',
    //   datumPolaska: '2023-11-16',
    //   cena: 1900,
    //   ocena: 3
    // }
  ]);

  return (

    <BrowserRouter>

      <div className="App">

        <Navbar location={location} />

        <Routes>
          <Route path='/' element={<Home setLocation={setLocation} searchDest={searchDest} setSearchDest={setSearchDest} sortiranje={sortiranje} setSortiranje={setSortiranje}/>} />
          <Route path='/putovanja' element={<Putovanja setLocation={setLocation} putovanja={putovanja} searchDest={searchDest} setSearchDest={setSearchDest} sortiranje={sortiranje} setSortiranje={setSortiranje}/>} />
          <Route path='/detalji' element={<Detalji setLocation={setLocation} putovanja={putovanja} setPutovanja={setPutovanja}/>}>
            <Route path=":singleId" element={<Detalji />} />
          </Route>
          <Route path='/dashboard' element={<Dashboard setLocation={setLocation} putovanja={putovanja} setPutovanja={setPutovanja}/>} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
