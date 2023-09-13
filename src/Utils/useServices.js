import { useEffect, useState } from "react";

export default () => {
  let [services, setservices] = useState();
  useEffect(() => {
    fetch("./Services.json")
      .then((data) => data.json())
      .then((res) => setservices(res))
      .catch((err) => console.log(err));
  }, []);
  return services;
};
