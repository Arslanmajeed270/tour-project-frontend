import React, { Component } from 'react'
import Banner from "./components/banner";
import Search from "./components/search";
import Intro from "./components/intro";
import Offer from "./components/offer";
import Video from "./components/video";
import HolidayPlan from "./components/holiday-plan";
import Ads from "./components/ads";

import { connect } from 'react-redux';
import { getHomePageData, getCities } from '../../store/home/actions';

const mapStateToProps = (state) => ({
  home: state.home
})

const mapDispatchToProps = {
  onGetHomePageData: (reqPacket) => getHomePageData(reqPacket),
  onGetCities: () => getCities(),
}

class Home extends Component {

  state = {
    homePageData: {},
    cities: []
  }

  static getDerivedStateFromProps(props, state) {
		const { home } = props;
		let stateChanged = false;
		let changedState = {};

		if (home && home.homePageData && JSON.stringify(state.homePageData) !== JSON.stringify(home.homePageData)) 
		{
			changedState.homePageData = home.homePageData;
			stateChanged = true;
		}

    if (home && home.cities && JSON.stringify(state.cities) !== JSON.stringify(home.cities)) 
		{
			changedState.cities = home.cities;
			stateChanged = true;
		}

		if (stateChanged) return changedState;
		return null;
	}

  componentDidMount(){
    const { onGetHomePageData, onGetCities } = this.props;
    const { homePageData, cities } = this.state;
    if( !homePageData.discountedTours || !homePageData.discountedTours.length ){
      const reqPacket = {
        location : "",
        locationFrom : "",
        departure : "",
        returnDate : "",
        travelType : ""
      }
      onGetHomePageData(reqPacket);
    }
    if( !cities || !cities.length ){
      onGetCities();
    }
  }

  onSearchHandler = (reqPacket) => {
    const { onGetHomePageData } = this.props;
    onGetHomePageData(reqPacket);
  }

  render() {
    const { homePageData, cities } = this.state;
    const discountedTours = homePageData.discountedTours ? homePageData.discountedTours : [];
    const tours = homePageData.tours ? homePageData.tours : [];
    return (
      <div>
      <Banner />
      <Search 
        cities={cities}
        onSearchHandler={this.onSearchHandler}
      />
      <Intro />
      <Offer discountedTours={discountedTours} />
      <Video />
      <HolidayPlan tours={tours} />
      <Ads />
    </div>
    )
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);
