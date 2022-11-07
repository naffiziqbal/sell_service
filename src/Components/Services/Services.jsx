import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceItemOnServicePage from './ServiceItemOnServicePage/ServiceItemOnServicePage';

const Services = () => {
    const {services} = useLoaderData()
    console.log(services)
    return (
        <div>
            {
                services.map(service => <ServiceItemOnServicePage key={service._id} service={service}/>)
            }
        </div>
    );
};

export default Services;
