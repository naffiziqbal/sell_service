import React from "react";
import { Link } from "react-router-dom";

const ServiceItem = ({ service }) => {
  const { _id, img, title, description, price } = service;
  return (
    <div className="flex gap-32">
      <div className="left_side w-1/2 mb-16">
        <img className="w-full h-96" src={img} alt="service-img"></img>
      </div>
      <div className="right_side">
        <h3 className="text-3xl">{title}</h3>
        <p>{description?.slice(0,100)}</p>
        <p>${price}</p>
        <Link to={`/services/${_id}`}>
          <button className="btn">See Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceItem;
