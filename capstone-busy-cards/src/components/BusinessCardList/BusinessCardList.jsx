import './BusinessCardList.scss'
import {Link} from "react-router-dom";
const baseURL = import.meta.env.VITE_API_URL;
import BusinessCard from '../BusinessCard/BusinessCard';

function businessCardList(){
    return(
        <BusinessCard/>
    )
}

export default businessCardList;