import React from 'react';

const ServiceItem = ({service}) => {
    const {img, title, description, price} = service
    return (
        <div className='flex gap-32'>
            <div className="left_side w-1/2 mb-16">
                <img className='w-full' src={img} alt ="service-img"></img>
            </div>
            <div className="right_side">
                <h3 className='text-3xl'>{title}</h3>
                <p>{description.slice(0,100)}</p>
                </div>
          
        </div>
    );
};

export default ServiceItem;
