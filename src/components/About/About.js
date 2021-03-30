import React from "react";
import "./About.css";
import Img1 from "../../assets/images/SvgImg/img3.svg";

const About = () => {
    return (
        <>
            <section className="About-Section">
                <h1>About Us</h1>
                <div className="container">
                    <div className="row">
                        <div className="col col-sm-12 col-md-6 col-lg-6 About-Content">
                            <p>
                            Pankaj Nandwani , Founder Of Vanshika Ki Pathsala , Profesional World .He wants to enrich the lives of people with genuine teachnigs, powered by technology.. He is always pondering in the world of science and technology . He also devoted all his time in creating this company. His best concept is he doesn't do it for some money but he need to help all the growing student community And Harsh Kaitwas The Co-founder of Vanshika ki Pathsala He is a entrepreneur and very enthusiastic towards the technology and science. 
                            <br/><br/> Pankaj Nandwani and Harsh both are the freelancer at the start and now they are the founder of the biggest community i.e, web. We have a around 10000+ students from all over the India . We are very much proud that we helped the student when they are in query regarding the Question and when they get the exact Answer ideas from our website we truely feel satisfied. We also have a aim to provide our teachngs free of cost to each and every student of India .
                            </p>
                        </div>

                        <div className="col col-sm-12 col-md-6 col-lg-6 AboutImg">
                            <img src={Img1} className="img-fluid" alt="NO_IMG"/>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About;