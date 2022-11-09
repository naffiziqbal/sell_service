import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/Hooks';
import { AuthContext } from '../../UserContext/UserContext';
import ServiceItem from '../Shared/ServiceItem/ServiceItem';

const Services = () => {
    const {services} = useLoaderData();
    const {loading, setLoading}= useContext(AuthContext)
    useTitle("Services")
    if (loading) {
        return (
          <div class="flex items-center justify-center h-screen">
            <div
              class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
              role="status"
            >
              <span class="visually-hidden">.</span>
            </div>
          </div>
        );
      }
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5'>
            {
                services.map(service => <ServiceItem key={service._id} service={service}/>)
            }
        </div>

    );
};

export default Services;
