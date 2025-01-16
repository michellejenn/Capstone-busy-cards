import BusinessCard from "../../components/BusinessCard/BusinessCard";
import "./MarketPlacePage.scss";
import Header from "../../components/Header/Header";

const baseURL = import.meta.env.VITE_API_URL;

function MarketPlacePage(){
    return(
        <>
          <Header/>
          <BusinessCard/>
        </>
      
    )
}
export default MarketPlacePage;