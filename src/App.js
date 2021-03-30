import React from "react";
import { Redirect, Route, Switch } from "react-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import "./App.css";

const App = () => {
    return (
        <>
            <Navbar/>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/services" component={Services}/>
            
            <Redirect to="/"/>
            </Switch>
        </>
    )
}

export default App;