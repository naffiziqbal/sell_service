import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContext";
import Review from "../../Shared/Reviews/Review";
import Swal from "sweetalert2";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const { _id, title, img, description, price, service } = useLoaderData();
  console.log();

  const [reviews, setReviews] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const reviewMessage = form.message.value;

    let datefield = new Date();
    let time = datefield;
    console.log(time);

    const review = {
      service: _id,
      reviewrName: name,
      email,
      phone,
      reviewMessage,
      time,
    };
    console.log(review);

    fetch(`https://cinemawala.vercel.app/services`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Review Has Been Added",
            showConfirmButton: false,
            timer: 2500,
          });
          form.reset();
        }
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: err.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  useEffect(() => {
    // Url = http://localhost:5000/servicereview/;
    fetch(`http://cinemawala.vercel.app/servicereview/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [reviews]);
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      <div className="service_details ">
        <h3 className="text-3xl"> Service Details</h3>
        <PhotoProvider>
          <div className="">
            <PhotoView src={img}>
              <img src={img} alt="service-img" />
            </PhotoView>
          </div>
        </PhotoProvider>
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
              <div>
                <p>What's Your Thoughts On This? </p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="First Name"
                    value={user?.uid ? user.displayName : " "}
                    className="input input-bordered input-primary w-full "
                  />
                  <input
                    type="text"
                    name="phone"
                    required
                    placeholder="Your Phone Number"
                    className="input input-bordered input-primary w-full "
                  />
                  <input
                    type="email"
                    name="email"
                    required
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
                  required
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
        {!user?.uid && (
          <div className="text-3xl  text-center p-5 underline">
            <Link to="/login">Please Log In To Give Or See Review</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
