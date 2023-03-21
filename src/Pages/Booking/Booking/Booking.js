import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Booking = () => {
    const {serviceId}=useParams()
    return (
        <div>
            <h2>This is Booking: { serviceId}</h2>
            <Link to='/home'><button>Home</button></Link>
        </div>
    );
};

export default Booking;