import './BusinessCardList.scss'
import {Link} from "react-router-dom";
const baseURL = import.meta.env.VITE_API_URL;
import BusinessCard from '../BusinessCard/BusinessCard';
import { useState, useEffect } from "react";



function BusinessCardList({businesses, services,selectedTag, getCategoryName}){
    let filteredBusinesses = [];

    const categoryMap = {
        1: 'Landscaping',
        2: 'Home Repairs & Renovations',
        3: 'Moving & Delivery Services',
        4: 'Car Rentals',
        5: 'Interior Design'
       
      };
    
     
    if (selectedTag !=="") {
        filteredBusinesses = businesses.filter((business)=>{
            return business.category_id===selectedTag;
        });
    } else{
        filteredBusinesses= businesses
    }
    return(
      
        <section className="businessCardList">
             
            <h1 className="businessCardList__header">
                What services are you here for? 
            </h1>
            <ul className="businessCardList__Item">
            {filteredBusinesses?.map((business)=>{
                return  <BusinessCard 
                key={business.id} 
                business={business} 
                services={services[business.id]}
                getCategoryName={getCategoryName}/>
            })}
           
        </ul>
        
        </section>
        
    )
}

export default BusinessCardList;