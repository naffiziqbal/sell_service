import { ArrowUpCircleIcon, TrashIcon } from "@heroicons/react/24/solid";
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../UserContext/UserContext";

const PrivateRouteRevires = ({ review }) => {
  console.log(review);
  const { _id, reviewrName, reviewMessage, service } = review;
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [services, setServices] = useState([]);
  console.log(services);

  const handleDelete = (id) => {
    fetch(`https://cinemawala.vercel.app/userreviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          console.log("s");

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Review Has been Deleted ",
            showConfirmButton: false,
            timer: 1500,
          });
          const remaining = reviews.filter((review) => review._id !== id);
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
    <div>
      <div className="border border-gray-200 rounded">
        <p className="text-lg font-semibold px-2">{services?.title}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="ml-2">
              <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
            </span>
            <span className="text-lg ml-2">
              <strong>{!reviewrName ? user?.displayName : reviewrName}</strong>
            </span>
            <span className="ml-2">:{reviewMessage?.slice(0, 100)}</span>
          </div>
          <div className="items-center">
            <button className=" mr-3">
              <ArrowUpCircleIcon className="w-6" />
            </button>
            <button className=" mr-3" onClick={() => handleDelete(_id)}>
              <TrashIcon className="w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateRouteRevires;
