import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContext";
import Review from "../../Reviews/Review";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const { _id, title, img, description, price } = useLoaderData();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const reviewMessage = form.message.value;

    const review = {
      service: _id,
      reviewrName: name,
      email,
      phone,
      reviewMessage,
    };
    console.log(review);

    fetch(`http://localhost:5000/services`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [reviews]);
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      <div className="service_details ">
        <h3 className="text-3xl"> Service Details</h3>
        <img src={img} alt="" />
        <p className="text-xl">
          <strong>Services Details</strong> {title}
        </p>
        <p>
          <strong>Service Price </strong>: {price}
        </p>
        <p>
          <strong>Service Description:</strong> {description}
        </p>
      </div>
      {user?.uid && (
        <div className="review px-10">
          <div className="write_review p-5">
            <form onSubmit={handleFormSubmit}>
              <div className="">
                <p>What's Your Thoughts On This? </p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="First Name"
                    value={user?.uid ? user.displayName : " "}
                    className="input input-bordered input-primary w-full "
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your Phone Number"
                    className="input input-bordered input-primary w-full "
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Number"
                    className="input input-bordered input-primary w-full "
                    value={user?.email ? user?.email : " "}
                    readOnly
                  />
                </div>
              </div>
              <div className="text-center pt-2">
                <textarea
                  name="message"
                  className="textarea w-full textarea-secondary"
                  placeholder="Your Message here"
                  rows={5}
                ></textarea>
                <br />
                <input type="submit" className="btn" />
              </div>
            </form>
          </div>
          <div className="review-section">
            <p className="text-2xl">All Reviews</p>
            {reviews.map((review) => (
              <Review key={review._id} review={review} />
            ))}
          </div>
        </div>
      )} 
      <div className="">
      {
        !user?.uid && <div className="text-3xl  text-center p-5 underline"><Link to ="/login">Please Log In To Give Or See Review</Link></div>
      }
      </div>
    </div>
  );
};

export default ServiceDetails;
