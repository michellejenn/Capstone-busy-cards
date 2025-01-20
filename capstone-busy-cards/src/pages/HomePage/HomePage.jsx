import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";


const baseURL = import.meta.env.VITE_API_URL;



function HomePage(){
    return(
        <>
          <Header headerType="home"/>
          <Hero/>
          <Footer/>
         
          

          
        </>
      
    )
}
export default HomePage;