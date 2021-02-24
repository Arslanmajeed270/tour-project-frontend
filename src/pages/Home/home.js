import React, { Component } from 'react'
import Banner from "./components/banner";
import Search from "./components/search";
import Intro from "./components/intro";
import Offer from "./components/offer";
import Video from "./components/video";
import HolidayPlan from "./components/holiday-plan";
import Ads from "./components/ads";

import { connect } from 'react-redux';
import { getHomePageData } from '../../store/home/actions';

const mapStateToProps = (state) => ({
  home: state.home
})

const mapDispatchToProps = {
  onGetHomePageData: () => getHomePageData()
}

class Home extends Component {
  render() {
    return (
      <div>
      <Banner />
      <Search />
      <Intro />
      <Offer />
      <Video />
      <HolidayPlan />
      <Ads />
    </div>
    )
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);
