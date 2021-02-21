import React from "react";
import Banner from "./components/banner";
import Search from "./components/search";
import Intro from "./components/intro";
import Offer from "./components/offer";
import Video from "./components/video";
import HolidayPlan from "./components/holiday-plan";
import Ads from "./components/ads";

const Home = () => {
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
  );
};

export default Home;
