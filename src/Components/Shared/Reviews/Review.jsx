import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../UserContext/UserContext";
import Swal from "sweetalert2";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

const Review = ({ review }) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [services, setServices] = useState([]);
  const { _id, phone, email, reviewrName, reviewMessage, service } = review;

  const handleDelete = (id) => {
    fetch(`https://cinemawala.vercel.app/userreviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deleteCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          const remaining = reviews.filter((review) => review._id !== id);
          console.log(remaining);
          setReviews(remaining);
        }
      });
  };

  useEffect(() => {
    fetch(`https://cinemawala.vercel.app/services/${service}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [service]);

  return (
    <div className="border border-gray-200 rounded">
      <p className="text-lg font-semibold px-2">{services?.title}</p>
      <div className="flex items-center justify-between">
        <div className=" ">
          <span className="ml-2">
            <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
          </span>{" "}
          <span className="text-lg ml-2">
            <strong>{!reviewrName ? user?.displayName : reviewrName}</strong>
          </span>
          <span className="ml-2">:{reviewMessage?.slice(0, 100)}</span>
        </div>
        <div className="items-center">
          <button className=" mr-3">Update</button>
          <button className=" mr-3" onClick={() => handleDelete(_id)}>
            Del
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
