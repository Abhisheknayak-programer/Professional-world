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
                    <h1 className="Second-Layer-Heading">Our Products</h1>
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


        </>
    )
}

export default Home;