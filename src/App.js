import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import './App.scss';
import { ApplicationContextProvider } from './Context/applicationContext';
import { ContextProvider } from './Context/eventContext';
import { ContextProviderTwo } from './Context/episodeContext';
import ScrollToTop from './ScrollToTop';
import Header from '../src/Components/Global/Header/Header';
import Player from '../src/Components/Global/Player/JS/player';
import Home from '../src/Pages/JS/Home';
import EventsPage from '../src/Pages/JS/Events';
import EventDescription from './Components/Events/JS/EventDescription';
import EpisodesPage from '../src/Pages/JS/Episodes';

function App() {
  library.add([faPlay, faPause]);

  return (
    <div>

      <ContextProvider>
        <ContextProviderTwo>
          <ApplicationContextProvider>
            <Router>
              <ScrollToTop />
              <Header />
              <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/evenements' element={<EventsPage />}></Route>
                <Route
                  path='evenements/:id'
                  element={<EventDescription />}
                />
                <Route exact path='/episodes' element={<EpisodesPage />}></Route>
              </Routes>
            </Router>
            <Player />
          </ApplicationContextProvider>
        </ContextProviderTwo>
      </ContextProvider>
    </div>
  );
}

export default App;
