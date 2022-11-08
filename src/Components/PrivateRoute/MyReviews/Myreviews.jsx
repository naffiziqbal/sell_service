import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../UserContext/UserContext";
import Review from "../../Shared/Reviews/Review";

const Myreviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/userreviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [user?.email]);
  return (
    <div>
      {reviews.map((review) => (
        <Review review={review} key={review._id} />
      ))}
    </div>
  );
};

export default Myreviews;
