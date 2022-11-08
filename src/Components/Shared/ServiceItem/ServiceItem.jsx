import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
const ServiceItem = ({ service }) => {
  const { _id, img, title, description, price } = service;
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 w-full gap-x-20 relative mb-2">
      <div className="left_side  mb-16">
      <PhotoProvider>
      <div className="">
          <PhotoView src={img}>
            <img src={img} alt="" />
          </PhotoView>
      </div>
    </PhotoProvider>
      </div>
      <div className="right_side  relative">
        <h3 className="text-3xl">{title}</h3>
        <p>{description?.slice(0, 100)}</p>
        <p>${price}</p>
        <Link to={`/services/${_id}`}>
          <button className="btn">See Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceItem;
