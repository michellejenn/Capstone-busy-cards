
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MarketPlacePage from './pages/MarketPlacePage/MarketPlacePage';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import BusinessDetailsPage from './pages/BusinessDetailsPage/BusinessDetailsPage';
import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL|| "http://localhost:8080/api";

function App() {
  const[businesses, setBusinesses] = useState([])
  const [services, setServices] = useState({});

  const categoryMap = {
    1: 'Landscaping',
    2: 'Home Repairs & Renovations',
    3: 'Moving & Delivery Services',
    4: 'Car Rentals',
    5: 'Interior Design'
   
  };

function getCategoryName(categoryId) {
return categoryMap[categoryId] || 'Unassigned Category'; 
}

  
  useEffect(()=>{
    async function getBusinesses(){
      try{
          const response = await axios.get
          (`${baseURL}/businesses`)
      
          setBusinesses(response.data)
      }
      catch(error){
          console.log("Error getting businesses", error)
      }
    }
    getBusinesses()
  }, [])

  useEffect(() => {
    async function getBusinessServices() {
      for (const business of businesses) {
        try {
         
          const response = await axios.get(`${baseURL}/business/${business.id}/services`);
          
          setServices((prevServices) => ({
            ...prevServices,
            [business.id]: response.data.services,
          }));
        } catch (error) {
          console.log(`Error fetching services for business ${business.id}:`, error);
        }
      }
    }

    if (businesses.length) {
      getBusinessServices();
    }
  }, [businesses]);



  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <HomePage/>}/>
      <Route path="/digitalCard/" element={ <MarketPlacePage businesses={businesses} services={services} getCategoryName={getCategoryName}/>}/>
      <Route path="/digitalCard/:id" element={ <BusinessDetailsPage/>}/>
    </Routes>
    </BrowserRouter>
  </>
 
   
  )
}

export default App
