import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/Hooks';
import ServiceItem from '../Shared/ServiceItem/ServiceItem';

const Services = () => {
    const {services} = useLoaderData()
    useTitle("Services")
    return (
        <div>
            {
                services.map(service => <ServiceItem key={service._id} service={service}/>)
            }
            <p>Service</p>
        </div>

    );
};

export default Services;
