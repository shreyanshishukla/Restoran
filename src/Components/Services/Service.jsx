import { useEffect, useState } from "react";
import "../../Styles/Service.css";

export default () => {
  let [services, setservices] = useState();
  useEffect(() => {
    fetch("./Services.json")
      .then((data) => data.json())
      .then((res) => setservices(res))
      .catch((err) => console.log(err));
  });
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
