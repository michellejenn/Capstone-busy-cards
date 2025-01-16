import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";

const baseURL = import.meta.env.VITE_API_URL;

import BusinessCard from "../../components/BusinessCard/BusinessCard";




function HomePage(){
    return(
        <>
          <Header/>
       
          <Hero/>
          <About/>
          

          
        </>
      
    )
}
export default HomePage;