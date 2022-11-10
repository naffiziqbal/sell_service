import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/Hooks";
import { AuthContext } from "../../UserContext/UserContext";
import ServiceItem from "../Shared/ServiceItem/ServiceItem";
import HeroSection from "./HeroSection/HeroSection";
import Stats from "./Stats/Stats";

const Home = () => {
  const { services } = useLoaderData();
  const { loading, setLoading } = useContext(AuthContext);
  useTitle("Home");

  return (
    <div>
      <div className="mb-5">
        <HeroSection />
      </div>

 <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-5 ">
 {services.map((service) => (
        <ServiceItem key={service._id} service={service} />
      ))}
 </div>
      <div className="text-center mt-5">
        <Link to={"/services"}>
          <button className="btn btn-primary mb-5">See All</button>
        </Link>
      </div>
      <div className="border my-5 rounded-xl text-center w-full">
        <p className="text-xl"> My Statics</p>
        <hr />
        <Stats />
      </div>
    </div>
  );
};

export default Home;
