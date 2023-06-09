import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';



const Services = () => {
    const [services, setServies] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
        .then(data=>setServies(data))
    },[])
    return (
        <div id='services'>
            <h2 className='text-primary mt-5'>Our Services</h2>
          <div className='service-container'>
            
            {
                services.map(service => <Service
                    key={service.id}
                    name={service.name}
                    service={service}
                ></Service>)
            }
        </div>  
        </div>
        
    );
};

export default Services;