import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/Hooks";
import UserContext, { AuthContext } from "../../UserContext/UserContext";
import Loading from "../Loading/Loading";
import ServiceItem from "../Shared/ServiceItem/ServiceItem";

const Services = () => {
  const { loading, setLoading } = UserContext(AuthContext);
  const { services } = useLoaderData();
  useTitle("Services");

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
      {services.map((service) => (
        <ServiceItem key={service._id} service={service} />
      ))}
    </div>
  );
};

export default Services;
