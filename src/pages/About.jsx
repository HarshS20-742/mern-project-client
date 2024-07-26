import { useState } from "react";
import { useAuth } from "../store/auth";

export const About = () =>{
    const {userData} = useAuth();
    // console.log("about page useauth data: ", userData);
   
    return(
       <>
       <section className="section-hero">
        <div className="container grid grid-two-cols">
            <div className="hero-content">
                <h3>Welcome {userData ? `${userData.username} to our website` : `to our website`}</h3>
                <h1>Why choose us?</h1>
                <p style={{
                    fontSize: "20px",     color:'white'
                    // marginBottom: "20px"
                }}>
                    Expertise: Our team consits of experienced IT professionals who are passionate about staying up-to-date withe the latest industry trends.
                </p>
                <p style={{
                    fontSize: "20px",     color:'white'
                    // marginBottom: "20px"
                }}>
                    Customization: We understand that every business is unique. Thats why we create solutions that are taliored to your specific goals and needs.
                </p>
                <p style={{
                    fontSize: "20px",     color:'white'
                    // marginBottom: "20px"
                }}>
                    Affordability: We offer compettitive pricing without compromising on the quality of our products.
                </p>
                <p style={{
                    fontSize: "20px",
                    color:'white'
                    // marginBottom: "20px"
                }}>
                    Relaibitlity: Count on us to be there when you need us. We are commited to ensuring you your IT environment is reliable and available 24/7.
                </p>

            </div>
      
        </div>

       </section>
       </>
    )
}