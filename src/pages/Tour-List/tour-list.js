import React, { Component } from 'react';
import TourLIstComponents from './components/tour-list';

import { connect } from 'react-redux';
import { getToursData, getSingleTour } from '../../store/tours/actions';
import { getCities } from '../../store/home/actions';

const mapStateToProps = (state) => ({
  tours: state.tours,
  home: state.home
})

const mapDispatchToProps = {
    onGetToursData: (reqPacket) => getToursData(reqPacket),
    onGetSingleTour: (id) => getSingleTour(id),
    onGetCities: () => getCities(),
}
class TourList extends Component {

    state = {
        toursData: {},
        cities: [],
        location: "",
        from: "",
        departure: new Date(),
        returnDate: new Date(),
        travelType: ""
      }
    
      static getDerivedStateFromProps(props, state) {
            const { tours, home } = props;
            let stateChanged = false;
            let changedState = {};
    
            if (tours && tours.toursData && JSON.stringify(state.toursData) !== JSON.stringify(tours.toursData)) 
            {
                changedState.toursData = tours.toursData;
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
        const { onGetToursData, onGetCities } = this.props;
        const { toursData, cities } = this.state;
        if( !toursData.tours || !toursData.tours.length ){
            const reqPacket = {
                offset: 1,
                // departure: "",
                // minPrice: 0,
                // maxPrice: 0,
                // name: "",
                // location: "",
                // travelType: "",
                // returnDate: "",
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


    render() {
        const { toursData, cities, location, from, departure,
            returnDate, travelType } = this.state;
            const tours = toursData.tours && toursData.tours.length ? toursData.tours : [];  
            const totalPages = toursData.totalPages  ? toursData.totalPages : 0;  
            const offset = toursData.offset  ? toursData.offset : 0;  
        return (
        <div>
            <TourLIstComponents 
            tours={tours}
            cities={cities}
            location={location}
            from={from}
            departure={departure}
            returnDate={returnDate}
            travelType={travelType}
            totalPages={totalPages}
            offset={offset}
            />
        </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TourList);
