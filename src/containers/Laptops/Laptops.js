import React from "react";
import "./Laptops.css";
import Laptop from "../API/LaptopApi";
import ProductCard from "../ProductCard/ProductCard";


function Laptop_Card(element, index, arr) {
    return (
        <ProductCard
            key={element.id}
            name={element.name}
            imgLink={element.imgLink}
            price={element.price}
            DeletedPrice={element.DeletedPrice}
            Ratings={element.Ratings}
            redirect={element.redirect}
        />
    )
}


// const Func = () =>{
//     console.log(Laptop[0].img1);
//     console.log(Laptop[0].img2);
//     console.log(Laptop[0].img3);
//     console.log(Laptop[0].img4);
// }



const Laptops = () => {
    return (
        <>
            <h1 className="text-center">Our Best Laptops</h1>
            <div className="container">
                <div className="row myrow">

                    {Laptop.map(Laptop_Card)}

                </div>
            </div>
        </>
    )
}

export default Laptops;