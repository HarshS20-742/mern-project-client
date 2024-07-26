import Analytics from "../components/Analytics";

 const Home = () =>{
    return(
        <>
        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        {/* <p>I am a software Developer and this is my mern project</p> */}
                        <h1>Welcome to the home page of my website</h1>
                        <p>
                            I am a sotware Developer and i created this just to display my skills in the mern technology. I have experience of more than one in the software development field. In my last job I got to work on different projects such as an ecommerce website which was made using reactjs, my role was to make the user interface, token handling, razorpay integration and CRUD operations in the admin panel.
                        </p>
                        <div className="btn btn-group">
                            <a href="/contact"><button className="btn">Connect Now</button></a>
                            <a href="/services"><button className="btn secondary-btn">Learn more</button></a>
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
                        <img src="/images/home.png" alt="new image"  />
                    </div>
                    <div className="hero-content">
                        {/* <p>I am a software Developer and this is my mern project</p> */}
                        <h1>Education and Work Details</h1>
                        <p>
                            I completed my graduation on BSc computer science in the year 2023 and soon after that I got a intership oppourtunity in Dreamlogic and just after completing my intership I got a job offer from the same company.
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