import "./About.scss";
// import brickImage from "../../assets/images/Pictures/brick-png-39821.png";


const baseURL = import.meta.env.VITE_API_URL;

function About(){

    return(
        
        <section className="About">
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

                Join us today and experience a simpler, smarter way to find and connect with the service providers that matter most to you. 
                </p>
        </section>
       
        
    )
}


export default About;