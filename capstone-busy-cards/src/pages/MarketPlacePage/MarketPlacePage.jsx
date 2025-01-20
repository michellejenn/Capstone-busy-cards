import BusinessCard from "../../components/BusinessCard/BusinessCard";
import "./MarketPlacePage.scss";
import Header from "../../components/Header/Header";
import BusinessCardList from "../../components/BusinessCardList/BusinessCardList";
import Filters from "../../components/Filters/Filters";
import Footer from "../../components/Footer/Footer";
import SecondNav from "../../components/SecondNav/SecondNav";
const baseURL = import.meta.env.VITE_API_URL||"http://localhost:8080/api";
import { useState, useEffect } from "react";
import axios from "axios";
function MarketPlacePage({businesses,services, getCategoryName}){
 const [filterStatus, setFilterStatus] = useState(false);
 const [selectedTag, setSelectedTag] = useState("");


 function filterStatusHandler(){
  setFilterStatus(!filterStatus);
 }

 function clickedTagHandler(clickedTag){
      setSelectedTag(clickedTag)
 }
    return(
        <>
       
          <Header headerType="digitalCard"/>
          <SecondNav filterStatusHandler={filterStatusHandler} filterStatus={filterStatus}/>
          <section className="PageWrap">
             {filterStatus ?(
                 <Filters clickedTagHandler={clickedTagHandler} selectedTag={selectedTag}/>
             ): null}
              <BusinessCardList businesses={businesses} services={services} selectedTag={selectedTag} getCategoryName={getCategoryName}/>
          </section>
          
          <Footer/>
        </>
      
    )
}
export default MarketPlacePage;