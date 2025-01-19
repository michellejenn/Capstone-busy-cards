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
const baseURL = import.meta.env.VITE_API_URL;

function BusinessCard(props){
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
                            4.5
                        </p>
                    </section>
                    <section className="businessCard__profileWrapper">
                        <h2 className="businessCard__name">
                            Mimi and sons <span className="businessCard__detail">verified</span>
                        </h2>
                        <p className="businessCard__category">
                            Interior decoration
                        </p>
                        <p className="businessCard__location">
                            <span className="businessCard__locationLogo"><Location/>
                            </span>Calgary, Alberta</p>
                    </section>
                        <ul className="businessCard__services">
                            <li className="businessCard__servicesItem">garden design</li>
                            <li className="businessCard__servicesItem">consultation</li>
                            <li className="businessCard__servicesItem">office decoration</li>
                        </ul>
                   
                   
                    

                   
                   

                  
                    
                    <section className="businessCard__socials">
                        
                        <a href="" className="businessCard__link">
                            <Instagram className="businessCard__social"/> 
                            </a>
                        <a href="" className="businessCard__link">
                            <Mail className="businessCard__social" /> 
                        </a>
                        <a href="" className="businessCard__link">
                             <LinkedIn className="businessCard__linkedin"/> 
                        </a>
                        <a href="" className="businessCard__link">
                             <Phone className="businessCard__social"/>
                        </a>
                    </section>
                    <section className="businessCard__profile">
                        {/* <Link to= {`business/${props.businessDetails.id}`}key={props.businessDetails.id}>
                        </Link> */}
                        <button className="businessCard__profileButton businessCard__profileButton--Desktop">
                            view profile 
                        </button>
                        <button className=" businessCard__profileButton businessCard__profileButton--Mobile">
                            <img className="businessCard__eyeIcon" src={seeMore} alt="see more" />
                        </button>
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
        <section className="example">
               <Group4/>
        </section>
        </>
        
        
    )
}

export default BusinessCard;

// import "./BusinessCard.scss";
// import { Link } from "react-router-dom";
// import Location from "../Icons/Location";
// import Group4 from "../Icons/Group4";

// const baseURL = import.meta.env.VITE_API_URL;

// function BusinessCard({ business }) {
//   return (
//     <section className="businessCard__wrapper">
//       <section className="businessCard">
//         {/* Business Card Header */}
//         <section className="businessCard__top">
          
//           <div className="businessCard__logo">
//             {/* Placeholder for logo */}
//             <Group4/>
//             <img
           
//               src=  {business.logo || "default-logo.png"}
//               alt={`${business.name} logo`}
//             />
//           </div>
//           <h3 className="businessCard__name">
//             {business.name}{" "}
//             {business.verified && (
//               <span className="businessCard__detail">Verified</span>
//             )}
//           </h3>
//           <p className="businessCard__category">{business.category}</p>
//           <p className="businessCard__services">
//             Services: {business.services.join(", ")}
//           </p>
//         </section>

//         {/* Business Card Footer */}
//         <section className="businessCard__bottom">
//           <p className="businessCard__location">
//             <span className="businessCard__locationLogo">
//               <Location />
//             </span>
//             {business.location}
//           </p>
//           <div className="businessCard__socials">
//             {business.socials.map((social, index) => (
//               <a
//                 key={index}
//                 href={social.link}
//                 className="businessCard__link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img
//                   src={social.icon}
//                   alt={social.platform}
//                   className={`businessCard__icon businessCard__${social.platform}`}
//                 />
//               </a>
//             ))}
//           </div>
//         </section>
//       </section>
//     </section>
//   );
// }

// export default BusinessCard;
