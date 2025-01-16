import "./BusinessCard.scss";
import {Link} from "react-router-dom";
import Location from '../Icons/Location';

const baseURL = import.meta.env.VITE_API_URL;

function BusinessCard(props){
    return(
        <section className="businessCard__wrapper">
                    <section className="businessCard">
                <section className="businessCard__top">
                    <p className="businessCard__logo">
                        
                    </p>
                
                    {/* <img className="businessCard__logo" src="" alt="an image" /> */}
                    <p className="businessCard__name">
                        Mimi and sons <span className="businessCard__verify">verified</span>
                    </p>
                    <p className="businessCard__category">
                        interior decoration
                    </p>
                    <p className="businessCard__services">
                        Services: garden design, etc.
                    </p>


                </section>
            
                <section className="businessCard__bottom">
                   
                    <p className="businessCard__location"><span className="businessCard__locationLogo"><Location/></span>Calgary, Alberta</p>

                    <a href="" className="businessCard__link">
                            <img src="" alt="Rating image" className="businessCard__rating" />
                        </a>
                    <section className="businessCard__socials">
                        
                        <a href="" className="businessCard__link">
                            <img src="" alt="instagram" className="businessCard__instagram" />
                            </a>
                        <a href="" className="businessCard__link">
                            <img src="" alt="email" className="businessCard__email" />
                        </a>
                        <a href="" className="businessCard__link">
                            <img src="" alt="linkedin" className="businessCard__linkedin" />
                        </a>
                        <a href="" className="businessCard__link">
                            <img src="" alt="phone" className="businessCard__phone" />
                        </a>
                    </section>
                    
                
                    
                    
                    
                

                </section>
            </section>
        </section>
        
    )
}

export default BusinessCard;