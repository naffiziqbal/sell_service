import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ServiceItem from "../Shared/ServiceItem/ServiceItem";
import HeroSection from "./HeroSection/HeroSection";

const Home = () => {
  const { services } = useLoaderData();
  console.log(services);

  return (
    <div>
      <div className="">
        <HeroSection/>
      </div>
      {services.map((service) => (
        <ServiceItem key={service._id} service={service} />
      ))}
      <div className = 'text-center'>
      <Link to={"/services"} >
        <button className="btn btn-primary">See All</button>
      </Link>
      </div>
    </div>
  );
};

export default Home;
