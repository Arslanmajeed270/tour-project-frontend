import React , {Component} from 'react';
import { withRouter, Switch, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PrivateRoute from './components/common/PrivateRoute';
import { setCurrentUser, logoutUser } from './store/auth/actions';

import Error from "./pages/Error/error";
import Index from "./pages";

class App extends Component {
    state = {
        publicRoutes: [
            '/',
            '/tour-list',
            '/tour-details-:id',
            '/about-us',
            '/error',
            '/contact-us'
        ],
        privateRoutes: [
            '/user-profile'
        ]
    }
    render() {
        const { onSetCurrentUser, onLogoutUser } = this.props;
        const { publicRoutes, privateRoutes } = this.state;
        if (localStorage.jwtToken) {
			onSetCurrentUser(JSON.parse(localStorage.jwtToken));
		}else{
            onLogoutUser();
        }
        return (
            <Switch>
                {
                    publicRoutes.map( (route, idx) => (<Route
                        exact
                        key={idx}
                        path={`${route}`}
                        component={Index}
                    />) )
                }
                 {
                    privateRoutes.map( (route, idx) => (<PrivateRoute
                        exact
                        key={idx}
                        path={`${route}`}
                        component={Index}
                    />) )
                }
                <Route exact path="/404" component={Error} />
                <Redirect to='/' />
            </Switch>
  )
                }
}

const mapDispatchToProps = dispatch => {
    return {
      onSetCurrentUser: ( user ) => dispatch(setCurrentUser(user)),
      onLogoutUser: () => dispatch(logoutUser())
    };
  };


  export default withRouter(connect(null,mapDispatchToProps)(App));
