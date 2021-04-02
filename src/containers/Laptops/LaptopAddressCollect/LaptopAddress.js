import React from "react";
import "./LaptopAddress.css";
import LaptopAPI from "../../API/LaptopApi";

const LaptopAddress = () => {
    return (
        <>
            <section className="Address_collect_section">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-6 col-md-10 col-sm-12 mx-auto">
                            <h1>Fill The Delivery Address</h1>

                            <form action="/laptop1-address-collector" method="POST">
                                <div className="InputBoxes">
                                    <input type="text" name="name" autoComplete="off" placeholder="Enter your name" />
                                </div>

                                <div className="InputBoxes">
                                    <input type="email" name="email" autoComplete="off" placeholder="Enter your email" />
                                </div>

                                <div className="InputBoxes">
                                    <input type="text" name="state" autoComplete="off" placeholder="Enter your state" />
                                </div>

                                <div className="InputBoxes">
                                    <input type="number" name="number" autoComplete="off" placeholder="Enter your number" />
                                </div>

                                <div className="InputBoxes">
                                    <input type="number" name="pincode" autoComplete="off" placeholder="Enter your pincode" />
                                </div>

                                <div className="InputBoxes">
                                    <input type="text" name="properaddress" autoComplete="off" placeholder="Enter your address" />
                                </div>

                                <div className="InputBoxes">
                                    <input type="text" name="landmark" autoComplete="off" placeholder="Enter your landmark" />
                                </div>

                                <div className="InputBoxes">
                                    <label htmlFor="ProductName">Product Name : </label><br/>
                                    <input type="text" name="productname" autoComplete="off" placeholder="Product Name" value={LaptopAPI[0].name} />
                                </div>


                                <div className="InputBoxes">
                                    <a type="submit" href={LaptopAPI[0].Pay} className="btn btn-success">Buy Now</a>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default LaptopAddress;