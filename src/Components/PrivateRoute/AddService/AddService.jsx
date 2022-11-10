import React, { useContext } from "react";
import { AuthContext } from "../../../UserContext/UserContext";
import Swal from "sweetalert2";
import useTitle from "../../../Hooks/Hooks";

const AddService = () => {
  const { user, loading } = useContext(AuthContext);
  useTitle("Add Services")


  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const url = form.url.value;
    const price = form.price.value;
    const description = form.description.value;



    const userPost = {
      title,
      img: url,
      price,
      description,
    };

    fetch("https://cinemawala.vercel.app/userservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Job has been Posted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  if (!loading) {
    return (
      <div class="flex items-center justify-center h-screen">
        <div
          class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span class="visually-hidden">.</span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        <div className="review px-10">
          <div className="write_review p-5">
            <form onSubmit={handleFormSubmit}>
              <div className="">
                <p>What Type of Service Do You Want's To Provide? </p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter You Job name"
                    required
                    className="input input-bordered input-primary w-full "
                  />
                  <input
                    type="url"
                    name="url"
                    placeholder="Submit a Photo"
                    required
                    className="input input-bordered input-primary w-full "
                  />
                  <input
                    type="number"
                    name="price"
                    placeholder="Enter You Cost Per Service"
                    required
                    className="input input-bordered input-primary w-full "
                  />
                </div>
              </div>
              <div className="text-center pt-2">
                <textarea
                  name="description"
                  className="textarea w-full textarea-secondary"
                  placeholder="Your Job Description"
                  required
                  rows={5}
                ></textarea>
                <br />
                <input type="submit" className="btn" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
