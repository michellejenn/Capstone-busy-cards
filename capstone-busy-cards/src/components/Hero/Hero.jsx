import "./Hero.scss";
// import brickImage from "../../assets/images/Pictures/brick-png-39821.png";
import brickImage from "../../assets/images/Pictures/orange-bricks-1800-mm-architextures.jpg";
import heroImage from "../../assets/images/Pictures/outsite-co-R-LK3sqLiBw-unsplash.jpg";
// import brickImage from "../../assets/images/Pictures/orange-bricks-1800-mm-architextures.jpg";
import firstImage from "../../assets/images/Pictures/96d43f33a4.jpg";

const baseURL = import.meta.env.VITE_API_URL;

function Hero(){

    return(
        <section className="Hero__wrapper">
            <section className="Hero">
                <section className="Hero__intro">
                    <h1 className="Hero__heading">
                        Welcome to BeeziCard
                    </h1>
                    <p className ="Hero__motto">
                        Connecting You to Trusted Professionals, One Digital Card at a Time.
                    </p>
                </section>
                <div className="Hero__inputItemsWrapper">
                        <section className="Hero__TopWrapper">
                            <input
                            className="Hero__itemTop Hero__itemTop--explore"
                            type="text"
                            placeholder="Explore"
                            />
                            {/* <input
                            className="Hero__itemTop Hero__itemTop--create"
                            type="text"
                            placeholder="Create +"
                            /> */}
                            <button className="Hero__itemButton Hero__itemTop--create">
                             Create +
                            </button>
                        </section>
                        <section className="Hero__bottomWrapper">
                            <input
                            className="Hero__itemBottom"
                            type="text"
                            placeholder="Ask our AI Assistant BizzBot"
                            
                            />
                            <button className="Hero__circle"></button>

                            {/* <button className="Hero__circleOutline"></button> */}
                        </section>
                         
                     </div>
                     
            {/* <img className="Hero__imageback"src= 
            {brickImage}
             alt="image" />
             <div className="Hero__gradient"></div>
             <img className="Hero__image"src= 
            {heroImage}
             alt="image" /> */}
             
        </section>
        <section className="stash">
                        <section className="stash__wrapper stash__wrapper--first">
                            <article className="stash__top stash__top--first">
                                
                            </article>
                            <article className="stash__bottom stash__bottom--first">

                            </article>
                        </section>
                        <section className="stash__wrapper stash__wrapper--second">
                            <article className="stash__top stash__top--second">

                            </article>
                            <article className="stash__bottom stash__bottom--second">
                                
                            </article>
                        </section>
                        <section className="stash__wrapper stash__wrapper--third">
                            <article className="stash__top stash__top--third">

                            </article>
                            <article className="stash__bottom stash__bottom--third">
                                
                            </article>
                        </section>
                     </section>
                
        {/* <section className="About">
                <h2 className="About__heading">
                    About Us
                </h2>
                <p className="About__body">
                At BusyCards, we believe that finding the right services should be simple, 
                fast, and reliable. Our platform connects you with top-rated businesses in 
                key service categories—whether it’s home repairs, landscaping, interior design, 
                moving services, or car rentals, we bring everything you need in one place.

                Our goal is to make it easier for you to discover 
                trusted professionals who can bring your projects to life. 
                Each business card on our platform represents a vetted, reliable service provider, 
                offering you peace of mind as you browse through their services. We believe in 
                transparency, and that’s why you can read real reviews, compare options, and make 
                informed decisions—all in just a few clicks.

                BusyCards is designed to streamline the way you access services, 
                saving you time and effort while helping you find the best professionals for 
                your needs. Whether you're looking for a garden makeover, a new interior design, or 
                reliable movers, you’ll find the right business for the job right here.

                Join us today and experience a simpler, smarter way to find and connect with the 
                service providers that matter most to you. 
                </p>
        </section> */}
        </section>
        
    )
}


export default Hero;