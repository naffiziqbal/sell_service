import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/Hooks";
import ServiceItem from "../Shared/ServiceItem/ServiceItem";
import HeroSection from "./HeroSection/HeroSection";
import Stats from "./Stats/Stats";

const Home = () => {
  const { services } = useLoaderData();
  useTitle("Home");
  return (
    <div>
      <div className="mb-5">
        <HeroSection />
      </div>

      {services.map((service) => (
        <ServiceItem key={service._id} service={service} />
      ))}
      <div className="text-center">
        <Link to={"/services"}>
          <button className="btn btn-primary mb-5">See All</button>
        </Link>
      </div>
      <div className="border my-5 rounded-xl text-center">
        <p className="text-xl"> My Statics</p>
        <hr />
        <Stats />
      </div>
    </div>
  );
};

export default Home;
