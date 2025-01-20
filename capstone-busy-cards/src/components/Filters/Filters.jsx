import './Filters.scss';
import axios from "axios";
import { useState,useEffect } from "react";
import DropDown from '../Icons/DropDown';

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';
function Filters({selectedTag, clickedTagHandler}){

    const [services, setServices] = useState([]);
    async function getServices(){
        try{
            const response = await axios.get
            (`${baseURL}/categories`)
            setServices(response.data);
         
        }
        catch(error){
            console.log("error getting services", error)
        }
    }
 
    useEffect(()=>{
        getServices()
    }, []);

    return(
        <section className="filter">
            
            {/* <h2 className="filter__header">
                FILTER <DropDown/>
            </h2> */}
        
            <ul className="filter__list">
                {services?.map((service,index)=>{
                   
                    let isSelectedTag =service.category_id ===selectedTag;
                    return(
                        <li onClick={() =>{
                            if(isSelectedTag){clickedTagHandler("");

                            }
                            else{clickedTagHandler(service.category_id);}
                        }}
                        className={`filter__item ${
                            isSelectedTag ? `filter__item--active`:""
                        }`}key={index}>
                         
                            {service?.category_name} 
                           
                        </li>
                    )
                })}
              
            </ul>
        </section>
    )
}

export default Filters;