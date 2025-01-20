import "./Hero.scss";



const baseURL = import.meta.env.VITE_API_URL;

function Hero(){

    return(
        <section className="Hero__wrapper">
            <section className="Hero">
                <section className="Hero__intro">
                    <h1 className="Hero__heading">
                        Welcome to BeeziCard
                    </h1>
                    <p className ="Hero__motto Hero__motto--first">
                    A digital card wallet for everyone: 
                    </p>
                    <p className ="Hero__motto Hero__motto--second">
                   Connecting you to trusted professionals one card at a time!
                    </p>
                </section>
                <div className="Hero__inputItemsWrapper">
                        <section className="Hero__TopWrapper">
                        
                            <button className="Hero__itemTop Hero__itemTop--explore">
                                Explore
                            </button>
                        
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

                      
                        </section>
                         
                     </div>
                     
    
             
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
                
               </section>
        
    )
}


export default Hero;