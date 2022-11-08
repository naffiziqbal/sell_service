import React, { useContext, useState } from "react";
import { AuthContext } from "../../../UserContext/UserContext";
import Swal from "sweetalert2";

const Review = ({ review }) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const { _id, phone, email, reviewrName, reviewMessage } = review;

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

  return (
    <div className="flex items-center justify-between border border-gray-200 rounded h-96">
      <div className="py-5 flex flex-nowrap items-center justify-between">
        <span className="ml-2">
          <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
        </span>{" "}
        <span className="text-lg ml-2">
          <strong>{!reviewrName ? user?.displayName : reviewrName}</strong>
        </span>
        <span className="ml-2">:{reviewMessage?.slice(0, 100)}</span>
      </div>
      <span>
        <button className="btn mr-3">Update</button>
        <button className="btn mr-3" onClick={() => handleDelete(_id)}>
          Del
        </button>
      </span>
    </div>
  );
};

export default Review;
