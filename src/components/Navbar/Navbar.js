import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg bg-light">
                <div className="row">
                    <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">

                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#">Professional World</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Services</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar;