import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () =>{
    return (
        <>
            <section className="Footer-section">
                <h1 className="text-center p-1">Professional World</h1>
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-4 col-md-4 col-sm-12 Footer-First-Box">
                            <h5>Reach Us</h5>
                            <address>
                               <p>Madhya Pradesh,Indore</p>
                               <p>Contact : +91 9303233346</p>
                            </address>
                        </div>

                        <div className="col col-lg-4 col-md-4 col-sm-12 Footer-First-Box">
                            <h5>Best Products</h5>
                            <NavLink to="/electronics">Electronic Gadget</NavLink>
                            <NavLink to="/antivirus">Antivirus Safety</NavLink>
                            <NavLink to="#">Trending Books</NavLink>
                            <NavLink to="/laptops">Gaming Laptops</NavLink>
                            <NavLink to="#">Best Pendrives</NavLink>
                        </div>


                        <div className="col col-lg-4 col-md-4 col-sm-12 Footer-First-Box">
                            <h5>Read About Us</h5>
                            <NavLink to="#">Terms and Conditions</NavLink>
                            <NavLink to="#">Privacy Policy</NavLink>
                            <NavLink to="/contact">Contact Us</NavLink>
                            <NavLink to="#">Faq</NavLink>
                            
                            <div className="socialmedia">
                                <div className="row">
                                    <div className="col col-sm-3 col-md-2 col-lg-1 Social-Media-Icon-1">
                                        <NavLink to="#"><FacebookIcon /></NavLink>
                                    </div>
                                    
                                    <div className="col col-sm-3 col-md-2 col-lg-1 Social-Media-Icon-3">
                                        <NavLink to="#"><InstagramIcon /></NavLink>
                                    </div>
                                    
                                    <div className="col col-sm-3 col-md-2 col-lg-1 Social-Media-Icon-1">
                                        <NavLink to="#"><TwitterIcon /></NavLink>
                                    </div>

                                    <div className="col col-sm-3 col-md-2 col-lg-1 Social-Media-Icon-4">
                                        <NavLink to="#"><YouTubeIcon /></NavLink>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </section>
            <p className="text-center lastPara">Copyright &copy; Professional World | Radha Shyam Sundar Enterprises 2021 | All Rights Reserved !</p>
        </>
    )
}

export default Footer;