import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// importing tabs
import Tab1Profile from './components/profile' 
import Tab2Verifications from './components/verifications' 
import Tab3Settings from './components/settings' 
import Tab4Booking from './components/booking'
import Tab5Reviews from './components/reviews'

import { connect } from 'react-redux';
import { logoutUser } from '../../store/auth/actions';

const mapDispatchToProps = {
  onLogoutUser: () => logoutUser(),
}

class UserProfile extends Component {
    state = {
        activeTab: 1
    }

    activeTabHandler = (activeTab) => (e) => {
        e.preventDefault();
        this.setState({activeTab})
    }

    render() {
        const { activeTab } = this.state;
        const { onLogoutUser } = this.props;
        return (
            <div className="user-profile-area pd-top-120">
            <div className="container">
              <div className="row">
                <div className="col-xl-10 col-lg-12">
                  <div className="row">
                    <div className="col-lg-4">
                      <ul className="nav nav-tabs tp-tabs style-two">
                        <li className="nav-item">
                          <Link 
                            className={`nav-link ${ activeTab === 1 ? "active" : "" }`} 
                            onClick={this.activeTabHandler(1)}
                            to="#"
                            >
                              <i className="fa fa-user" />Profile
                        </Link>
                        </li>
                        <li className="nav-item">
                          <Link 
                            className={`nav-link ${ activeTab === 2 ? "active" : "" }`} 
                            onClick={this.activeTabHandler(2)}
                            to="#"
                          >
                            <i className="fa fa-check-square-o" />Verifications
                        </Link>
                        </li>
                        <li className="nav-item">
                          <Link 
                            className={`nav-link ${ activeTab === 3 ? "active" : "" }`}  
                            onClick={this.activeTabHandler(3)}
                            to="#"
                          >
                            <i className="fa fa-cog" />Settings
                        </Link>
                        </li>
                        <li className="nav-item">
                          <Link 
                            className={`nav-link ${ activeTab === 4 ? "active" : "" }`}  
                            onClick={this.activeTabHandler(4)}
                            to="#"
                          >
                            <i className="fa fa-calendar-minus-o" />Booking
                        </Link>
                        </li>
                        <li className="nav-item">
                          <Link 
                            className={`nav-link ${ activeTab === 5 ? "active" : "" }`} 
                            onClick={this.activeTabHandler(5)}
                            to="#"
                          >
                            <i className="fa fa-star-o" />Reviews
                        </Link>
                        </li>
                        <li className="text-center">
                          <Link 
                            className="btn btn-yellow" 
                            to="#"
                            onClick={ (e) =>  {
                              e.preventDefault();
                              onLogoutUser()}}
                          >
                            <i className="fa fa-sign-in" aria-hidden="true" /> <span>Log Out</span>
                        </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-xl-7 col-lg-8 offset-xl-1">
                      <div className="tab-content user-tab-content">
                          <Tab1Profile active={activeTab} />
                          <Tab2Verifications active={activeTab} />
                          <Tab3Settings active={activeTab} />
                          <Tab4Booking active={activeTab} />
                          <Tab5Reviews active={activeTab} />
                    </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>

        )
    }
}

export default connect(null,mapDispatchToProps)(UserProfile);