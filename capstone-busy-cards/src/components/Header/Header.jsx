import "./Header.scss";
import logo from "../../assets/images/Icons/BIZICARDLOGO.png";

const baseURL = import.meta.env.VITE_API_URL;

function Header(props){
    return(
        <header className="header">
            <section className="header__content">
                <section className="header__banner">
                    <img src= {logo}
                    alt="logo" className="header__logo" />
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
                    <h1 className="header__item"> login </h1>  
                </section>
            </section>
        </header>
     
      
    )

}
export default Header;
