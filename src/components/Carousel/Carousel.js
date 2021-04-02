import React from "react";
import "./Carousel.css";

const CarouselPage = (props) => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={props.Img1} className="img-fluid d-block w-100 CarouselImg" alt="NOIMG" />
                    </div>

                    <div className="carousel-item">
                        <img src={props.Img2} className="img-fluid d-block w-100 CarouselImg" alt="NOIMG" />          
                    </div>

                    <div className="carousel-item">
                        <img src={props.Img3} className="img-fluid d-block w-100 CarouselImg" alt="NOIMG" />           
                    </div>

                    <div className="carousel-item">
                        <img src={props.Img4} className="img-fluid d-block w-100 CarouselImg" alt="NOIMG" />    
                    </div>

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default CarouselPage;