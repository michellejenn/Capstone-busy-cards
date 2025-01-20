import './SecondNav.scss';
import Filter from '../Icons/Filter';
import DropDown from '../Icons/DropDown';

function SecondNav({filterStatusHandler, filterStatus}){
return(
    <ul className="SecondNav__nav">
    <li className="SecondNav__navitem">
        <button onClick={filterStatusHandler} className={`SecondNav__button ${filterStatus ? "SecondNav__button--active" : "SecondNav__button--passive"}`}>
           
            <Filter/>
            <p className="SecondNav__filterWord">
            All Categories  </p>
            <DropDown/>

        </button>
    </li>
    <li className="SecondNav__navitem SecondNav__navitem--mobile">
        Top rated Businesses
    </li>
    <li className="SecondNav__navitem SecondNav__navitem--mobile">
        Best Sellers
    </li>
    <li className="SecondNav__navitem ">
      <button className="SecondNav__more">
      More <DropDown/>
        </button>
    </li>
</ul>
)
}
export default SecondNav;