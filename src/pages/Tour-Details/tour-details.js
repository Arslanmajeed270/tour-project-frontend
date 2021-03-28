import React, { Component }  from 'react';
import TourDetailsComponent from './components/tour-details';

import { connect } from 'react-redux';
import { getSingleTour, bookTour } from '../../store/tours/actions';

const mapStateToProps = (state) => ({
  tours: state.tours
})

const mapDispatchToProps = {
    onGetSingleTour: (id) => getSingleTour(id),
    onBookTour: (reqPacket) => bookTour(reqPacket),
}


class TourDetails extends Component {

    state = {
        singleTour: {},
        id:null
    }

    static getDerivedStateFromProps(props, state) {
        const { tours } = props;
        let stateChanged = false;
        let changedState = {};

        if (tours && tours.singleTour && JSON.stringify(state.singleTour) !== JSON.stringify(tours.singleTour)) 
        {
            changedState.singleTour = tours.singleTour;
            stateChanged = true;
        }

        if (stateChanged) return changedState;
        return null;
    }

    componentDidMount() {
        const { onGetSingleTour, match } = this.props;
        const { singleTour } = this.state;
        const id = match.params.id;
        if( id && (!singleTour || !singleTour.id) ){
            this.setState({id});
            onGetSingleTour(id);
        }
       
    }

    render() {
        const { singleTour } = this.state;
        const { onBookTour } = this.props;
        return (
            <div>
            <TourDetailsComponent 
                singleTour={singleTour}
                onBookTour={onBookTour}
            />
        </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TourDetails);
