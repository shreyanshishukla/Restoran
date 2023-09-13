import { useEffect, useState } from "react";
import "../../Styles/Service.css";
import useServices from "../../Utils/useServices";

export default () => {
  const services = useServices();
  return (
    <div className="services">
      {services &&
        services.map((service) => {
          return (
            <div className="service-data">
              <img src={"./" + service.imagename + ".png"} />
              <div className="service-name">{service.service}</div>
              <div className="service-description">{service.description}</div>
            </div>
          );
        })}
    </div>
  );
};
