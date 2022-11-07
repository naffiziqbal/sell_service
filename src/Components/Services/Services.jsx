import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceItem from '../Shared/ServiceItem/ServiceItem';

const Services = () => {
    const {services} = useLoaderData()
    console.log(services)
    return (
        <div>
            {
                services.map(service => <ServiceItem key={service._id} service={service}/>)
            }
        </div>
    );
};

export default Services;
