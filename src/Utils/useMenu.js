import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { add, loadDishes } from "./Reducer";
import { useSelector } from "react-redux";
import { ShowChart } from "@mui/icons-material";

export default () => {
  const dispatcher = useDispatch();
  const [sorttype, setsorttype] = useState(0);
  const [openmenu, setopenmenu] = useState(false);
  const [searching, setSearching] = useState(false);
  const [filtertype, setfiltertype] = useState(0);
  const [category, setcategory] = useState("");

  const searchingfunction = (val) => {
    setSearching(val);
  };
  const filterfood = (veg) => {
    setfiltertype(veg);
  };
  const sortfood = (type) => {
    if (type != sorttype) {
      setsorttype(type);
    } else {
      setsorttype(0);
    }
  };

  const getData = () => {
    fetch("./menudata.json")
      .then((res) => res.json())
      .then((data) => {
        dispatcher(add(data.array.categorys));
        dispatcher(loadDishes());
        console.log("done");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const ref = useRef();

  useEffect(() => {
    getData();
  }, []);
  const data = useSelector((data) => data.menudata.menudata);
  const cartcount = useSelector((data) => data.cart.cartCount);
  const cartTotal = useSelector((data) => data.cart.cartTotal);
  const dishes = useSelector((data) => data.menudata.dishes);
  return {
    data,
    cartcount,
    cartTotal,
    dishes,
    setcategory,
    setopenmenu,
    openmenu,
    searching,
    category,
    setsorttype,
    setSearching,
    setfiltertype,
    sorttype,
    filtertype,
    searchingfunction,
    filterfood,
    sortfood,
  };
};
