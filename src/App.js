import React , {Component} from 'react';
import { withRouter, Switch, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// import PrivateRoute from './components/common/PrivateRoute';
import PublicRoute from './components/common/PublicRoute';
import { setCurrentUser, logoutUser } from './store/actions/index';

import Error from "./pages/Error/error";
import Index from "./pages";

class App extends Component {
    state = {
        publicRoutes: [
            '/',
            '/tour-list',
            '/tour-details',
            '/about-us',
            '/error',
            '/contact-us',
            '/user-profile'
        ],
        privateRoutes: [
        ]
    }
    render() {
        const { onSetCurrentUser, onLogoutUser } = this.props;
        const { publicRoutes } = this.state;
        if (localStorage.jwtToken) {
			onSetCurrentUser(JSON.parse(localStorage.jwtToken));
		}else{
            onLogoutUser();
        }
        return (
            <Switch>
                {
                    publicRoutes.map( (route, idx) => (<PublicRoute
                        exact
                        key={idx}
                        path={`${route}`}
                        component={Index}
                    />) )
                }
                 {/* {
                    privateRoutes.map( (route, idx) => (<PrivateRoute
                        exact
                        key={idx}
                        path={`${route}`}
                        component={Index}
                    />) )
                } */}
                <Route exact path="/404" component={Error} />
                <Redirect to='/' />
            </Switch>
  )
                }
}

const mapDispatchToProps = dispatch => {
    return {
      onSetCurrentUser: () => dispatch(setCurrentUser()),
      onLogoutUser: () => dispatch(logoutUser())
    };
  };


  export default withRouter(connect(null,mapDispatchToProps)(App));
