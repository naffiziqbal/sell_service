import React, { useContext } from "react";
import { AuthContext } from "../../../UserContext/UserContext";

const Review = ({ review }) => {
  const { user } = useContext(AuthContext);

  const { phone, email, reviewrName, reviewMessage } = review;
  return (
    <div className="flex items-center justify-between border border-gray-200 rounded ">
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
        <button className="btn mr-3">Del</button>
      </span>
    </div>
  );
};

export default Review;
