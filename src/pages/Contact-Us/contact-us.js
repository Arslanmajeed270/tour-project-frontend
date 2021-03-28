import React from 'react';
import Contact from './components/contact';

import { connect } from 'react-redux';
import { contactUs } from '../../store/common/actions';

const mapDispatchToProps = {
    onContactUs: (reqPacket) => contactUs(reqPacket),
}

const ContactUs = ( { onContactUs} ) => {
    return <div>
        <Contact 
        onContactUs={onContactUs}
        />
    </div>
}

export default connect(null,mapDispatchToProps)(ContactUs);

