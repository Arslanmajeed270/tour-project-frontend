import React, { Component } from 'react';
import $ from 'jquery';

import TourLIstComponents from './components/tour-list';

import { connect } from 'react-redux';
import { getToursData } from '../../store/tours/actions';
import { getCities } from '../../store/home/actions';

const mapStateToProps = (state) => ({
  tours: state.tours,
  home: state.home
})

const mapDispatchToProps = {
    onGetToursData: (reqPacket) => getToursData(reqPacket),
    onGetCities: () => getCities(),
}
class TourList extends Component {

    state = {
        toursData: {},
        tours: [],
        cities: [],
        offset: 0,
        totalPages: 0,
        departure: "",
        location: "",
        locationFrom: "",
        travelType: "",
        returnDate: "",
      }
    
      static getDerivedStateFromProps(props, state) {
            const { tours, home } = props;
            let stateChanged = false;
            let changedState = {};
    
            if (tours && tours.toursData && JSON.stringify(state.toursData) !== JSON.stringify(tours.toursData)) 
            {
                changedState.toursData = tours.toursData;
                changedState.tours = tours.toursData.tours && tours.toursData.tours.length ? tours.toursData.tours : [];  
                changedState.totalPages = tours.toursData.totalPages  ? tours.toursData.totalPages : 0;  
                changedState.offset = tours.toursData.offset  ? tours.toursData.offset : 0;  
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
        const { onGetToursData, onGetCities, location } = this.props;
        const { toursData, cities } = this.state;

        const queryParam = new URLSearchParams(location.search);
        if( !toursData.tours || !toursData.tours.length ){
            const reqPacket = {
                offset: 0,
                departure: queryParam.get('departure') ? queryParam.get('departure') : '',
                location: queryParam.get('location') ? queryParam.get('location') : '',
                locationFrom: queryParam.get('locationFrom') ? queryParam.get('locationFrom') : '',
                travelType: queryParam.get('travelType') ? queryParam.get('travelType') : '',
                returnDate: queryParam.get('returnDate') ? queryParam.get('returnDate') : '',
            };
            onGetToursData(reqPacket);
        }
        if( !cities || !cities.length ){
          onGetCities();
        }
      }

      onChangeHandler = (e) => {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
        }

      onSubmitHandler = () => {
        const { location } = this.state;
        const { onGetToursData } = this.props;
        const locationFrom = $('select[name="from"]').siblings('.nice-select').find('span').html();
        const departure = $('input[name="departure"]').val();
        const returnDate = $('input[name="returnDate"]').val();
        const travelType = $('select[name="travelType"]').siblings('.nice-select').find('span').html();
        this.setState({
          departure: departure,
          locationFrom: locationFrom,
          travelType: travelType,
          returnDate: returnDate
        }, ()=> {
          const reqPacket = {
            offset: 0,
            departure: departure,
            location: location,
            locationFrom: locationFrom,
            travelType: travelType,
            returnDate: returnDate,
        };
        onGetToursData(reqPacket);
        });
    }

      paginationHandler = (offset) => {
        const { onGetToursData } = this.props;
        const { departure, location, locationFrom, travelType, returnDate  } = this.state;
        const reqPacket = {
          offset: offset,
          departure,
          location,
          locationFrom,
          travelType,
          returnDate,
      };
        onGetToursData(reqPacket);
      }


    render() {
        const { cities, tours, totalPages, offset, departure,
          location, locationFrom, travelType, returnDate } = this.state;
           
        return (
        <div>
            <TourLIstComponents 
            tours={tours}
            cities={cities}
            totalPages={totalPages}
            offset={offset}
            departure={departure}
            location={location}
            locationFrom={locationFrom}
            travelType={travelType}
            returnDate={returnDate}
            onChangeHandler={this.onChangeHandler}
            onSubmitHandler={this.onSubmitHandler}
            paginationHandler={this.paginationHandler}
            />
        </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TourList);
