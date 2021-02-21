import React, { Component } from 'react';
import { Route } from 'react-router-dom';


import Home from "./Home/home";
import AboutUs from "./About-Us/about-us";
import TourList from "./Tour-List/tour-list";
import TourDetails from "./Tour-Details/tour-details";
import Contact from "./Contact-Us/contact-us";
import UserProfile from "./User-Profile/user-profile";

class routes extends Component {
    render() {
        return (
            <>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/tour-list" component={TourList} />
            <Route exact path="/tour-details" component={TourDetails} />
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/user-profile" component={UserProfile} />

        </>
        )
    }
}
export default routes;
