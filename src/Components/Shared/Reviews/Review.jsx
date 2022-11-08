import React, { useContext } from "react";
import { AuthContext } from "../../../UserContext/UserContext";

const Review = ({ review }) => {
  const { user } = useContext(AuthContext);

  const { phone, email, reviewrName, reviewMessage } = review;
  return (
    <div className="border border-gray-200 rounded py-5 flex flex-nowrap items-center">
      <span className="ml-2">
        <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
      </span>{" "}
      <span className="text-lg ml-2">
        <strong>{!reviewrName ? user?.displayName : reviewrName}</strong>
      </span>
      <span className="ml-2">:{reviewMessage?.slice(0, 100)}</span>
    </div>
  );
};

export default Review;
