import React, { Component } from 'react';
import BackToTop from '../components/commonLayout/BackToTop';
import FullScreenSearch from '../components/commonLayout/FullScreenSearch';
import Footer from '../components/commonLayout/footer';
import Navbar from '../components/commonLayout/navbar';
import PageHeader from '../components/commonLayout/page-header';
import Subscribe from '../components/commonLayout/subscribe';
import Routes from './routes';


class Index extends Component {

    headerTitleHandler = () => {
        const { history } = this.props;
        const pathname = history.location.pathname;
        let title = "";
        if( pathname === "/tour-list" )
            title = "Tour List";
        else if( pathname === "/tour-details" )
            title = "Tour Details";
        else if( pathname === "/about-us" )
            title = "About Us";
        else if( pathname === "/contact-us" )
            title = "Contact Us";
        else if( pathname === "/user-profile" )
            title = "User Profile";
        
        return title;
    }

    render() {
        const { history } = this.props;
        const pathname = history.location.pathname;
        return (
            <React.Fragment>
                <div className="body-overlay" id="body-overlay"></div>
               <FullScreenSearch />
                <div id="viaje">
                    <Navbar />
                    { pathname !== "/" &&
                        <PageHeader headertitle={this.headerTitleHandler()}  />
                    }
                    <Routes />
                    {
                        pathname !== "/about-us" &&
                        <Subscribe />
                    }
                    <Footer />
                </div>
               <BackToTop />
            </React.Fragment>
        )
    }
}


export default Index;
