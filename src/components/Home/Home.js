import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import img1 from "../../assets/images/SecondLayerImg/img1.jpg"
import img2 from "../../assets/images/SecondLayerImg/img2.jpg"
import img3 from "../../assets/images/SecondLayerImg/img3.jpg"
import img4 from "../../assets/images/SecondLayerImg/img4.jpg"
import img5 from "../../assets/images/SecondLayerImg/img5.jpg"
import img6 from "../../assets/images/SecondLayerImg/img6.jpg"
import img7 from "../../assets/images/SecondLayerImg/img7.jpg"
import img8 from "../../assets/images/SecondLayerImg/img8.jpg"
// import img9 from "../../assets/images/SecondLayerImg/img9.jpg"
// import img10 from "../../assets/images/SecondLayerImg/img10.jpg"
import img11 from "../../assets/images/SecondLayerImg/img11.jpg"
import banner from "../../assets/images/LandingPageImg/initiatives-banner.jpg";


const Home = () => {
    return (
        <>


        {/* Product Landing Design */}

            <section className="First-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-lg-8 col-sm-10 col-md-8 ImgContent">
                            <h1>We Sell Products All Over India</h1>
                            <h4>Unit Of Radha Shyam Sundar Enterprises</h4>
                            <h6>Our Products are checked thrice before the delivery</h6>
                            <NavLink className="btn-lg btn-dark" to="/about">Shop Now</NavLink>
                        </div>
                    </div>
                </div>
            </section>









        {/* Product Grid Design */}

            <section className="Second-Layer">
                <div className="container-fluid">
                    <h1 className="Second-Layer-Heading">Trending Products</h1>
                    <div className="row">
                        <div className="col col-lg-4 col-sm-4 col-md-4 Img-Row-1">
                            <img src={img1} className="img-fluid" alt="NO_IMG"/>
                        </div>

                        <div className="col col-lg-4 col-sm-4 col-md-4 Img-Row-1">
                            <img src={img2} className="img-fluid" alt="NO_IMG"/>
                        </div>

                        <div className="col col-lg-4 col-sm-4 col-md-4 Img-Row-1">
                            <img src={img3} className="img-fluid" alt="NO_IMG"/>
                        </div>
                    </div>
               
<br/>

                    <div className="row">
                        <div className="col col-lg-6 col-sm-6 col-md-6 Img-Row-2">
                            <img src={img4} className="img-fluid" alt="NO_IMG"/>
                        </div>

                        <div className="col col-lg-6 col-sm-6 col-md-6 Img-Row-2">
                            <img src={img11} className="img-fluid" alt="NO_IMG"/>
                        </div>

                    </div>

<br/>



                    <div className="row">
                        <div className="col col-lg-3 col-sm-3 col-md-3 Img-Row-3">
                            <img src={img6} className="img-fluid" alt="NO_IMG"/>
                        </div>

                        <div className="col col-lg-3 col-sm-3 col-md-3 Img-Row-3">
                            <img src={img7} className="img-fluid" alt="NO_IMG"/>
                        </div>

                        <div className="col col-lg-3 col-sm-3 col-md-3 Img-Row-3">
                            <img src={img8} className="img-fluid" alt="NO_IMG"/>
                        </div>

                        <div className="col col-lg-3 col-sm-3 col-md-3 Img-Row-3">
                            <img src={img5} className="img-fluid" alt="NO_IMG"/>
                        </div>
                    </div>
               




                </div>
            </section>








        {/* Our Initiatives */}

        <section className="Third-Layer">
           <div className="container">
            <h1>INITIATIVES</h1>
                <div className="row">
                    <div className="col col-sm-12 col-md-12 col-lg-12 Third-Layer-Content">
                        <p>Every Moment has the power to give us a new memory. Filled with this sprit, to Live the New!’ every moment, professional world has been running multiple initiatives in the space of Skill Imparting, connecting the Tech Lovers, Latest on Electronics and home Decor and computers And laptops.</p>
                    </div>
                </div>

                <br/>

                <div className="row">
                    <div className="col col-sm-12 col-md-12 col-lg-12 bannerImg">
                        <img src={banner} className="img-fluid" alt="NO_IMG"/>
                    </div>
                </div>
           </div>
        </section>






        {/* Subscription Layer Design */}

        <section className="Fourth-Layer-Design">
            <div className="container">
                    <h1>NEWSLETTER</h1>
                        <div className="row">
                            <div className="col col-sm-12 col-md-12 col-lg-12 Subscription">
                                <p>Get timely updates from your favorite products</p>
                            </div>  

                            <div className="col col-sm-12 col-md-12 col-lg-12 Subscription-form">
                                    <form action="/" method="POST">
                                        <input type="email" name="email" placeholder="Enter your email address" autoComplete="off" />

                                        <button className="btn btn-dark" type="submit">Subscribe</button>
                                    </form>
                            </div>

                        </div>
            </div>
        </section>
        




        </>
    )
}

export default Home;