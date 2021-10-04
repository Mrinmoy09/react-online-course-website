import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services , setServices] = useState([])
    useEffect(()=>{
        fetch('./courses.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="container bg-dark my-3 mx-auto">
            <div className="row p-3 mx-5">
                {
                    services.map(service => <Service
                    key={service.key}
                    service={service}
                    ></Service>)
                }

            </div>
            
        </div>
    );
};

export default Services;