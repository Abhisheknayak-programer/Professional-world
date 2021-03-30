import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <>
            <section className="Contact-section">
                <h1 className="text-center">Contact Us</h1>
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-6 col-md-10 col-sm-12 mx-auto">
                            <form action="/contact" method="POST">

                                <div className="UserInputBox">
                                    <input type="text" autoComplete="off" name="fullname" placeholder="Enter your name"/>
                                </div>

                                <div className="UserInputBox">
                                    <input type="number" autoComplete="off" name="number" placeholder="Enter your number"/>
                                </div>

                                <div className="UserInputBox">
                                    <input type="email" name="fullname" autoComplete="off" placeholder="Enter your email"/>
                                </div>

                                <div className="UserInputBox">
                                    <input type="text" name="subject" autoComplete="off" placeholder="Enter your subject"/>
                                </div>

                                <div className="UserInputBox">
                                    <textarea name="Comment" placeholder="Enter subject description"></textarea>
                                </div>

                                <div className="submit_button">
                                    <button className="btn btn-outline-warning" type="submit">Submit</button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact;