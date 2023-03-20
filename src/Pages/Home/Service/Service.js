import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    // const { service } = props;
    const { name,price, description, img} = service;
    return (
        <div>

             <div className='service col-lg-4 col-sm-6 col-12'>           
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className='px-3'>Description: { description}</p>
        </div>
        </div>
       
    );
};

export default Service;