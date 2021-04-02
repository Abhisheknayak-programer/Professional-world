import React from "react";
import LaptopApi from "../../API/LaptopApi";
import Carousel from "../../../components/Carousel/Carousel";
import "./LaptopInnerPage.css";
import { NavLink } from "react-router-dom";


const LaptopInnerPage = () => {
    return (
        <>

            <section className="LaptopInnerPage">
                <h1>{LaptopApi[0].name}</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-lg-6 col-sm-12 col-md-6 CarouselBox">
                            <Carousel
                                Img1={LaptopApi[0].img1}
                                Img2={LaptopApi[0].img2}
                                Img3={LaptopApi[0].img3}
                                Img4={LaptopApi[0].img4} />
                        </div>

                        <div className="col col-lg-6 col-sm-12 col-md-6 Second-Col">
                            <ul>
                                <li>Model : {LaptopApi[0].model}</li>
                                <li>Series : {LaptopApi[0].Series}</li>
                                <li>{LaptopApi[0].KeyFetures1}</li>
                                <li>{LaptopApi[0].KeyFetures2}</li>
                                <li>{LaptopApi[0].KeyFetures3}</li>
                                <li>Ram : {LaptopApi[0].Ram}</li>
                                <li>Processor : {LaptopApi[0].Processor}</li>
                                <li>SSD : {LaptopApi[0].SSD}</li>
                                <li>HDD : {LaptopApi[0].HDD}</li>
                                <li>Rpm : {LaptopApi[0].Rpm}</li>
                                <li>Os Architecture : {LaptopApi[0].Os_Architecture}</li>
                                <li>Battery Backup : {LaptopApi[0].battery_backup}</li>
                                <li>Warrenty : {LaptopApi[0].warrenty}</li>
                                <li>Color : {LaptopApi[0].color}</li>
                                <li>Screen Size : {LaptopApi[0].Screen_size}</li>
                                <li>Weight {LaptopApi[0].Weight}</li>
                                <li>Webcam : {LaptopApi[0].WebCam}</li>
                                <li>Delivery Charges : &#8377;{LaptopApi[0].delivery}</li>
                            </ul>


                            
                            <div className="Main_Redirection_layer">
                                <h4>Price : <del>&#8377; {LaptopApi[0].DeletedPrice}</del> {LaptopApi[0].price} </h4>
                                <NavLink className="btn btn-success" to={LaptopApi[0].redirect2}>Procced To Checkout</NavLink>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default LaptopInnerPage;