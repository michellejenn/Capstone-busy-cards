
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MarketPlacePage from './pages/MarketPlacePage/MarketPlacePage';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <HomePage/>}/>
      <Route path="/Market" element={ <MarketPlacePage/>}/>
    </Routes>
    </BrowserRouter>
  </>
 
   
  )
}

export default App
