import "./BusinessCard.scss";
import {Link} from "react-router-dom";
import Location from '../Icons/Location';
import Group4 from "../Icons/Group4";
import logoIcon from "../../assets/images/Icons/BIZICARDICONLOGO.png";
import seeMore from "../../assets/images/Icons/eye.png";
import star from "../../assets/images/Icons/icons8-star-filled-32.png";
import Mail from "../Icons/Mail";
import Instagram from "../Icons/Instagram";
import LinkedIn from "../Icons/LinkedIn";
import Phone from "../Icons/Phone";
import Add from "../Icons/Add";
import Share from "../Icons/Share";
import verified from '../../assets/images/Icons/icons8-verified-48.png'
const baseURL = import.meta.env.VITE_API_URL;

function BusinessCard({business, services, getCategoryName}){

    const categoryMap = {
        1: 'Landscaping',
        2: 'Home Repairs & Renovations',
        3: 'Moving & Delivery Services',
        4: 'Car Rentals',
        5: 'Interior Design'
       
      };

   
 
    return(
        <>
        <section className="businessCard__wrapper">
                    <section className="businessCard">
                        <section className="businessCard__top">
                        <article className="businessCard__logoWrapper">
                            <img className ="businessCard__logo"src={logoIcon} alt="" />
                        </article>
                
                        </section>
            
                    <section className="businessCard__bottom">
                        <section className="businessCard__starWrapper">
                            <img src={star} alt="" className="businessCard__star" />
                            <p className="businessCard__starValue">
                                {business.overall_rating}
                            </p>
                        </section>
                    <section className="businessCard__profileWrapper">
                        <h2 className="businessCard__name">
                            {business.business_name} <span className={`businessCard__detail ${
                                        business.verification_status === 1 ? 'businessCard__detail--verified' : 'businessCard__detail--not-verified'
                                    }`}
                                    >
                                    {business.verification_status === 1 ? (
                                        
                                <img src={verified} alt="Verified" className="businessCard__verified-icon" />
                                  
                                ) : (
                                    ''
                                )}
                                </span>
                        </h2>
                        <p className="businessCard__category">
                            {getCategoryName(business.category_id)}
                        </p>
                        <p className="businessCard__location">
                            <span className="businessCard__locationLogo"><Location/>
                            </span>{business.location}</p>
                    </section>
                        <ul className="businessCard__services">
                            {services?.slice(0, 3).map((service, index)=>(
                               <li key={index}className="businessCard__servicesItem">
                                        {service.service_name}
                               </li>
                              
                            ))}

                            {services?.length > 3 && (
                                <Link to={`/digitalCard/${business.id}`} key={business.id}>
                                      <li className="businessCard__servicesItem businessCard__servicesItem--number">
                                      +{services.length - 3} More
                                    </li>
                                </Link>
                                  
                                  )}
                       
                        </ul>

                    
                    <section className="businessCard__socials">
                        
                        <a href={business.instagram_handle} className="businessCard__link">
                            <Instagram className="businessCard__social"/> 
                            </a>
                        <a href={business.email} className="businessCard__link">
                            <Mail className="businessCard__social" /> 
                        </a>
                        <a href={business.linkedin_address} className="businessCard__link">
                             <LinkedIn className="businessCard__linkedin"/> 
                        </a>
                        <a href={business.phone_no} className="businessCard__link">
                             <Phone className="businessCard__social"/>
                        </a>
                    </section>
                    <section className="businessCard__profile">
                        
                        <Link to={`/digitalCard/${business.id}`} key={business.id}>
                        <button className="businessCard__profileButton businessCard__profileButton--Desktop">
                            view profile 
                        </button>
                        <button className=" businessCard__profileButton businessCard__profileButton--Mobile">
                            <img className="businessCard__eyeIcon" src={seeMore} alt="see more" />
                        </button>
                        </Link>
                        <section className="businessCard__AddShare">
                        <button className="businessCard__Add">
                            <Add className="businessCard__add"/>
                        </button>
                        <button className="businessCard__Share">
                            <Share className="businessCard__share"/>
                        </button>
                    </section>
                    </section>

                </section>
            </section>
        </section>
        
        </>
        
        
    )
}

export default BusinessCard;

