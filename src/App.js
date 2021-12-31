import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import TopMenu from "./components/TopMenu";
import LandingPage from "./components/LandingPage";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import Order from "./components/orders/Order";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import Footer from "./Footer";
import AddFood from "./components/users/AddFood";
import EditFood from "./components/users/EditFood";
import Food from "./components/users/Food";
import Register from "./components/view/auth/Register";
import Login from "./components/view/auth/Login";
import Deals from "../src/Deals";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";


function App() {
  return (
    <div>
    <Router>
    <TopMenu /> 
    <div style={{ padding: '10px'}}>
    <Switch>
    <Route path="/deals" exact component={Deals} /> 
    <Route path="/users/add" component={AddFood} />
    <Route path="/users/edit/:id" component={EditFood} />
    <Route path="/users/:id" component={Food} />
    <Route path="/register" exact component={Register} />
    <Route path="/login" exact component={Login} />
    <Route path="/menu" exact component={Menu} /> 
    <Route path="/about-us" exact component={AboutUs} /> 
    <Route path="/contact-us" exact component={ContactUs} />
    <Route path="/order" component={Order} />
    <Route path="/not-found" component={NotFound} />
    <Route path="/" exact component={LandingPage} />  
    <Redirect to="/not-found" />
    </Switch>
    <Footer />
    </div>
    </Router>
    </div>
    
  );
}

export default App;
