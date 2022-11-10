import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../UserContext/UserContext";
import Swal from "sweetalert2";
import {TrashIcon, ArrowUpCircleIcon} from'@heroicons/react/24/solid'

const Review = ({ review }) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [services, setServices] = useState([]);
  const { _id, reviewrName, reviewMessage, service } = review;



  useEffect(() => {
    fetch(`https://cinemawala.vercel.app/services/${service}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [services]);

  return (
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
        {/* <div className="items-center">
          <button className=" mr-3">
            <ArrowUpCircleIcon className="w-6"/>
          </button>
          <button className=" mr-3" onClick={() => handleDelete(_id)}>
            <TrashIcon className="w-6" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Review;
