import "./Header.scss";

const baseURL = import.meta.env.VITE_API_URL;

function Header(props){
    return(
        <section className="header">
            <h1 className="header__logo">
                BuzziCards
            </h1>
            <ul className="header__secondSection">
                <a href="#" className="header__link">
                    <li className="header__items">
                        About us
                    </li>
                </a>
              
                <a href="#" className="header__link">
                    <li className="header__items">
                        Service categories
                    </li>
                </a>
               
                <a href="#" className="header__link">
                    <li className="header__items">
                        Login in/ Sign up
                    </li>
                </a>
                
            </ul>
            
            {/* <p className="header__call">

            </p> */}
            
        </section>
    )

}
export default Header;
