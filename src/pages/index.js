import React, { Component } from 'react';
import BackToTop from '../components/commonLayout/BackToTop';
import FullScreenSearch from '../components/commonLayout/FullScreenSearch';
import Footer from '../components/commonLayout/footer';
import Navbar from '../components/commonLayout/navbar';
import PageHeader from '../components/commonLayout/page-header';
import Subscribe from '../components/commonLayout/subscribe';
import Routes from './routes';
import Loader from '../components/common/Loader';
import AuthModel from './User-Profile/components/authModel'

import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    page: state.page
  })
  
class Index extends Component {

    state = {
        loading: false,
        showModel: false,
    }

    headerTitleHandler = () => {
        const { history } = this.props;
        const pathname = history.location.pathname;
        let title = "";
        if( pathname === "/tour-list" )
            title = "Tour List";
        else if( pathname.indexOf("tour-details") > 0 )
            title = "Tour Details";
        else if( pathname === "/about-us" )
            title = "About Us";
        else if( pathname === "/contact-us" )
            title = "Contact Us";
        else if( pathname === "/user-profile" )
            title = "User Profile";
        
        return title;
    }

    static getDerivedStateFromProps(props, state) {
		const { page } = props;
		let stateChanged = false;
		let changedState = {};

	
		if ( page && JSON.stringify(state.loading) !== JSON.stringify(page.loading) ) {
			changedState.loading = page.loading;
			stateChanged = true;
		}

		if (stateChanged) return changedState;
		return null;
	}

    closeModelHandler = () => {
		this.setState({
			showModel: false,
		});
	};
	modelHandler = () => {
        this.setState({
            showModel: !this.state.showModel
         });
	};

    render() {
        const { history } = this.props;
        const { loading, showModel } = this.state;
        const pathname = history.location.pathname;
        return (
            <React.Fragment>
                {loading &&
                    <Loader  />
                }
                <div className="body-overlay" id="body-overlay"></div>
               <FullScreenSearch />
                <div id="viaje">
                    <Navbar
                        modelHandler={this.modelHandler}
                        history={history}
                    />
                    { pathname !== "/" &&
                        <PageHeader headertitle={this.headerTitleHandler()}  />
                    }
                    
                        <Routes />
                   
                    {
                        pathname !== "/about-us" && pathname !== "/tour-list" &&
                        <Subscribe />
                    }
                    <Footer />
                </div>
               <BackToTop />
               <AuthModel 
               showModel={showModel}
               closeModelHandler={this.closeModelHandler}
               />
            </React.Fragment>
        )
    }
}


export default connect(mapStateToProps,null)(Index);
