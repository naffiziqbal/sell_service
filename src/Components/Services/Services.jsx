import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/Hooks';
import { AuthContext } from '../../UserContext/UserContext';
import ServiceItem from '../Shared/ServiceItem/ServiceItem';

const Services = () => {
    const {services} = useLoaderData();
    const {loading, setLoading}= useContext(AuthContext)
    useTitle("Services")
  
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5'>
            {
                services.map(service => <ServiceItem key={service._id} service={service}/>)
            }
        </div>

    );
};

export default Services;
