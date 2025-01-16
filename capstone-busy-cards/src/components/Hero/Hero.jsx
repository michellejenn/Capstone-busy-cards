import "./Hero.scss";
// import brickImage from "../../assets/images/Pictures/brick-png-39821.png";
import brickImage from "../../assets/images/Pictures/orange-bricks-1800-mm-architextures.jpg";
import heroImage from "../../assets/images/Pictures/outsite-co-R-LK3sqLiBw-unsplash.jpg";
// import brickImage from "../../assets/images/Pictures/orange-bricks-1800-mm-architextures.jpg";

const baseURL = import.meta.env.VITE_API_URL;

function Hero(){

    return(
        <section className="Hero__section">
            <section className="Hero">
            <img className="Hero__imageback"src= 
            {brickImage}
             alt="image" />
             <div className="Hero__gradient"></div>
             <img className="Hero__image"src= 
            {heroImage}
             alt="image" />
             
        </section>
        
        </section>
        
    )
}


export default Hero;