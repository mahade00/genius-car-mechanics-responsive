import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // const { service } = props;
    const { id,name,price, description, img} = service;
    return (
        <div>

             <div className='service col-lg-4 col-sm-6 col-12'>           
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
                <p className='px-3'>Description: {description}</p>
                <Link to={`/booking/${id}`}>
                 <button className='btn btn-warning'>Book { name.toLowerCase()}</button>
                </Link>
        </div>
        </div>
       
    );
};

export default Service;