import Analytics from "../components/Analytics";

 const Home = () =>{
    return(
        <>
        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>I am a software Developer and this is my mern project</p>
                        <h1>Welcome to the home page of my website</h1>
                        <p>
                            I am a sotware Developer and i created this just to display my skills in the mern technology
                        </p>
                        <div className="btn btn-group">
                            <a href="/contact"><button className="btn">Connect Now</button></a>
                            <a href="/services"><button className="btn secondary-btn">Lerarn more</button></a>
                        </div>
                       
                    </div>

                    <div className="hero-image">
                        <img src="/images/home.png" alt="new image" />
                    </div>
                </div>
            </section>
        </main>


        {/* second section of the page */}
       <Analytics/>
        {/* // 3rd section starts here */}

        <section className="section-hero">
                <div className="container grid grid-two-cols"> <div className="hero-image">
                        <img src="/images/home.png" alt="new image" />
                    </div>
                    <div className="hero-content">
                        <p>I am a software Developer and this is my mern project</p>
                        <h1>Welcome to the home page of my website</h1>
                        <p>
                            I am a sotware Developer and i created this just to display my skills in the mern technology
                        </p>
                        <div className="btn btn-group">
                            <a href="/contact"><button className="btn">Connect Now</button></a>
                            <a href="/services"><button className="btn secondary-btn">Lerarn more</button></a>
                        </div>
                       
                    </div>

                   
                </div>
            </section>
        </>
    )
}
export default Home;