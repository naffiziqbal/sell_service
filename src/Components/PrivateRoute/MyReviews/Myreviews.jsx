import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../../Hooks/Hooks";
import { AuthContext } from "../../../UserContext/UserContext";
import Review from "../../Shared/Reviews/Review";

const Myreviews = () => {
  useTitle('My Review')
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://cinemawala.vercel.app/userreviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [user?.email]);
  return (
    <div className="h-screen">
      {reviews.map((review) => (
        <Review review={review} key={review._id} />
      ))}
    </div>
  );
};

export default Myreviews;
