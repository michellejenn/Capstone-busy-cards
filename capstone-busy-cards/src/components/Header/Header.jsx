import "./Header.scss";
import logo from "../../assets/images/Icons/BIZICARDLOGO.png";
import {Link, NavLink} from "react-router-dom";

const baseURL = import.meta.env.VITE_API_URL;

function Header({headerType}){
    return(
        <header className="header">
            <section className="header__content">
                
               <section className="header__banner">
               <NavLink to="/">
               <img src= {logo}
                    alt="logo" className="header__logo" />
               </NavLink>
                  
                     <div className="header__search-container">
                        <input
                        className="header__search"
                        type="text"
                        placeholder="Search"
                        />
                        <button type="submit" className="header__searchicon">
                        🔍
                        </button>
                     </div>
                </section>
                <section className="header__items">
               
                    {headerType === 'digitalCard' && (
                        <>
                            
                            <h1 className="header__item">
                                 Wallet <button className="header__walletItem"> 0</button></h1>
                            <h1 className="header__item">Marketplace</h1>
                            <h1 className="header__item">Logout</h1>
                           
                        </>
                    )}                      
                    <NavLink to="/digitalCard">
                    {headerType ==='home' && <h1 className="header__item"> Login </h1> }
                    </NavLink>
                     
                </section>
            </section>
        </header>
     
      
    )

}
export default Header;
