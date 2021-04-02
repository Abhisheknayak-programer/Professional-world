import React from "react";
import { NavLink } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./Navbar.css";


const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg bg-light">
                <div className="row">
                    <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">

                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">Professional World</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink activeClassName='menu-link-active' className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                        </li>

                                        <li className="nav-item dropdown">
                                        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Products
                                        </NavLink>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><NavLink className="dropdown-item" to="/electronics">Electronics</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/antivirus">Antivirus</NavLink></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><NavLink className="dropdown-item" to="/laptops">Best Laptops</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/otherproducts">Other Products</NavLink></li>
                                         </ul>
                                       </li>
                                       
                                       <li className="nav-item">
                                            <NavLink activeClassName='menu-link-active' className="nav-link" to="/electronics">Electronics</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink activeClassName='menu-link-active' className="nav-link" to="/laptops">Laptops</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink activeClassName='menu-link-active' className="nav-link" to="/about">About</NavLink>
                                        </li>
 
                                        <li className="nav-item">
                                            <NavLink activeClassName='menu-link-active' className="nav-link" to="/contact">Contact</NavLink>
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