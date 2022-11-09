import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { AuthContext } from "../../../UserContext/UserContext";
const ServiceItem = ({ service }) => {
  const { loading } = useContext(AuthContext);
  const { _id, img, title, description, price } = service;
  if (loading) {
    return (
      <div class="flex items-center justify-center">
        <div
          class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span class="visually-hidden">...</span>
        </div>
      </div>
    );
  }
  return (
    <div className=" border rounded-md shadow-lg p-5 flex flex-col justify-center items-center">
      <PhotoProvider>
        <div>
          <PhotoView src={img}>
            <img className="service__Img w-full" src={img} alt="" />
          </PhotoView>
        </div>
      </PhotoProvider>
      <h3 className="text-3xl">{title}</h3>
      <p>{description?.slice(0, 100)}</p>
      <p>${price}</p>
      <Link to={`/services/${_id}`}>
        <button className="btn">See Details</button>
      </Link>
    </div>
  );
};

export default ServiceItem;
