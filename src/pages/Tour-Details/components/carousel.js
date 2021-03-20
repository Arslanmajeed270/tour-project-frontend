import React from 'react';
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: { items: 3 },
};

function ControlledCarousel( {plans} ) {
  const items =  [];
  if( plans && plans.length ){
    plans.map( (data,idx) => {

      if( idx === (plans.length-1) ){
        items.push(
              <div className="col-lg-12 col-md-12">
                <div className="single-blog single-blog-after-none">
                  <div className="p-list">
                    <div className="list">{idx+1}</div>
                    <p>Day {data.day}</p>
                  </div>
                  <div className="thumb">
                    <img width="183.33" height="111.52" src={data.image} alt="blog" />
                  </div>
                  <div className="single-blog-details">
                    <h4 className="title"> {data.title} </h4>
                    <p className="content"> {data.detail} </p>
                  </div>
                </div>
            </div>
        );
      }else{
        items.push(
          <div className="col-lg-12 col-md-12">
            <div className="single-blog">
              <div className="p-list">
                <div className="list"> {idx+1} </div>
                <p>Day {data.day}</p>
              </div>
              <div className="thumb">
                <img width="183.33" height="111.52" src={data.image} alt="blog" />
              </div>
              <div className="single-blog-details">
                <h4 className="title"> {data.title} </h4>
                <p className="content"> {data.detail} </p>
              </div>
            </div>
          </div>
        );
      }
      return data
    } )
  }
    return (
      <AliceCarousel
      mouseTracking
      responsive={responsive}
      autoPlay
      infinite
      disableButtonsControls
      autoPlayInterval={2000}
      items={items}
    />
    );
  }

  export default ControlledCarousel;