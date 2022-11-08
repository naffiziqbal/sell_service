import React from 'react';

const Review = ({review}) => {
    const { phone , email, reviewrName, reviewMessage} = review
    return (
        <div className='border border-gray-200 rounded py-5'>
            <span className='text-xl'><strong>{reviewrName}</strong></span>
            <span>:{reviewMessage?.slice(0,100)}</span>
        </div>
    );
};

export default Review;
