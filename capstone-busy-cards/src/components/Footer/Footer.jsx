// import "./Footer.scss";

// const baseURL =import.meta.env.VITE_API_URL;



// function Footer(props){
//     return(
//         <footer className="Footer">
//         <div className="Footer__container">
       
//             <div className="Footer__brand">
//                 <h2 className="Footer__title">BuzziCards</h2>
//                 <p className="Footer__description">
//                     Your one-stop solution for finding trusted services. Connecting you to the best professionals with ease and transparency.
//                 </p>
//             </div>
    
           
//             <div className="Footer__links">
//                 <h3 className="Footer__heading">Quick Links</h3>
//                 <ul className="Footer__list">
//                     <li><a href="/" className="Footer__link">Home</a></li>
//                     <li><a href="/about" className="Footer__link">About Us</a></li>
//                     <li><a href="/services" className="Footer__link">Services</a></li>
//                     <li><a href="/contact" className="Footer__link">Contact</a></li>
//                 </ul>
//             </div>
    
          
//             <div className="Footer__contact">
//                 <h3 className="Footer__heading">Contact Us</h3>
//                 <ul className="Footer__list">
//                     <li>Email: <a href="mailto:info@busycards.com" className="Footer__link">info@busycards.com</a></li>
//                     <li>Phone: <a href="tel:+14036203242" className="Footer__link">+1 403-620-3242</a></li>
//                     <li>Location: Calgary, AB, Canada</li>
//                 </ul>
//             </div>
//         </div>
    
      
//         <div className="Footer__bottom">
//             <p>© 2025 BusyCards. All rights reserved.</p>
//         </div>
//     </footer>
//     )
// }
// export default Footer;

import "./Footer.scss";
import Facebook from '../Icons/Facebook';
import Explore from '../Icons/Explore';
import Instagram from '../Icons/Instagram';
import Pinterest from '../Icons/Pinterest';
// Component for the footer

function Footer(){
    return(
        <section className="footer">
            <section className="footer__wrapper">
                <h2 className="footer__snaps">Beezicard</h2>

                <ul className="footer__unordered">
                    <li className="footer__list">
                        <p className="footer__item">For photographers</p>
                        <p className="footer__item">Hire talent</p>
                        <p className="footer__item">Inspiration</p>
                    </li>
                    <li className="footer__list">
                        <p className="footer__item">About</p>
                        <p className="footer__item">Careers</p>
                        <p className="footer__item">Support</p>
                    </li>
                    {/* Defined two footer icons to alternatively display them on mobile or desktop screens using display: none */}
                    <li className="footer__icons">
               
                        <Facebook/>
                        <Explore/>
                        <Instagram/>
                        <Pinterest/>
                      
                    </li>
                </ul>
            </section>
            {/* Second footer icons. Would be display: none on larger screens*/ }
            <ul className="footer__bottom">
            <li className="footer__icons-second">
                        <Facebook/>
                        <Explore/>
                        <Instagram/>
                        <Pinterest/>
                      
            
                 
            </li>
            <li className="footer__writings">
                <p className="footer__terms">&copy;2020 Beezicard</p>
                <p className="footer__terms">Terms</p>
                <p className="footer__terms">Privacy</p>
                <p className="footer__terms">Cookies</p>
            </li>
            </ul>
            
        </section>
    )
}
export default Footer;
