
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MarketPlacePage from './pages/MarketPlacePage/MarketPlacePage';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import BusinessDetailsPage from './pages/BusinessDetailsPage/BusinessDetailsPage';

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <HomePage/>}/>
      <Route path="/Market" element={ <MarketPlacePage/>}/>
      <Route path="/BusinessDetails" element={ <BusinessDetailsPage/>}/>
    </Routes>
    </BrowserRouter>
  </>
 
   
  )
}

export default App
