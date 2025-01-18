import "./BusinessCard.scss";
import {Link} from "react-router-dom";
import Location from '../Icons/Location';
import Group4 from "../Icons/Group4";

const baseURL = import.meta.env.VITE_API_URL;

function BusinessCard(props){
    return(
        <section className="businessCard__wrapper">
                    <section className="businessCard">
                <section className="businessCard__top">
                    <p className="businessCard__logo">
                        <Group4/>
                    </p>
                
                    {/* <img className="businessCard__logo" src="" alt="an image" /> */}
                    <p className="businessCard__name">
                        Mimi and sons <span className="businessCard__detail">verified</span>
                    </p>
                    <p className="businessCard__detail">
                        interior decoration
                    </p>
                    <p className="businessCard__detail">
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
