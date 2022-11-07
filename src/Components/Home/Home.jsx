import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ServiceItem from "./ServiceItem/ServiceItem";

const Home = () => {
  const { services } = useLoaderData();
  console.log(services);

  return (
    <div>
      {services.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
      <Link to={"services"}>
        {" "}
        <button className="btn btn-primary">See All</button>
      </Link>
    </div>
  );
};

export default Home;
