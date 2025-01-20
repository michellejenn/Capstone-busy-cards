import "./BusinessDetailsPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


const baseURL = import.meta.env.VITE_API_URL;


function BusinessDetailsPage(){
    return(
        <>
          <Header headerType="digitalCard"/>
          <h1 className="digitalCard__head">Page under construction. This will serve as a portfolio for each business, 
            with reviews and ratings,gallery and more details.</h1>
          
          
        </>
      
    )
}
export default BusinessDetailsPage;