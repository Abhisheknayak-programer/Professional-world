import React from "react";
import "./ProductCard.css";
import StarIcon from '@material-ui/icons/Star';
import { NavLink } from "react-router-dom";

const ProductCard = (props) =>{
    return (
        <>
            <section className="productCard col col-sm-9 col-md-5 col-lg-3">
                <div className="layer-1">
                    <img src={props.imgLink} className="img-fluid" alt="No_Img" />
                </div>

                <div className="layer-2">
                    <NavLink  to={props.redirect}><h3>{props.name}</h3></NavLink>
                    
                    <div className="Three_in_One">
                        <del><h3>&#8377;{props.DeletedPrice}</h3></del>
                        <h3>&#8377;{props.price}</h3>
                        <h1>{props.Ratings}<StarIcon/></h1>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProductCard;