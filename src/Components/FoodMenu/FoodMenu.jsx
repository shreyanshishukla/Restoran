import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { add, loadDishes } from "../../Utils/Reducer";
import { useSelector } from "react-redux";
import "../../Styles/Foodmenu.css";
import FoodList from "./FoodList";
import Options from "./Options";
import Up from "../Up";

export default () => {
  const [sorttype, setsorttype] = useState(0);
  const [openmenu, setopenmenu] = useState(false);
  const ref = useRef();
  const dispatcher = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:3001/menus")
      .then((data) => {
        dispatcher(add(data.data));
        dispatcher(loadDishes());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [searching, setSearching] = useState(false);
  const searchingfunction = (val) => {
    setSearching(val);
  };
  const data = useSelector((data) => data.menudata.menudata);
  const cartcount = useSelector((data) => data.cart.cartCount);
  const cartTotal = useSelector((data) => data.cart.cartTotal);
  const dishes = useSelector((data) => data.menudata.dishes);

  const [filtertype, setfiltertype] = useState(0);
  const [category, setcategory] = useState("");

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
  const bluroutbg = (val) => {
    if (val) ref.current.style.filter = " grayscale(0)opacity(1)";
    else
      ref.current.style.filter =
        " hue-rotate(10deg) grayscale(0.2)opacity(0.4)";
  };
  return (
    <div className="fmouter">
      <div className="bgtoblur" ref={ref}>
        <Options
          filterfood={filterfood}
          sortfood={sortfood}
          searchingfunction={searchingfunction}
          searching={searching}
        />
        {!searching && (
          <FoodList
            filtertype={filtertype}
            sorttype={sorttype}
            category={category}
          />
        )}
      </div>
      <div className="browsemenudiv">
        {openmenu && (
          <div className="category">
            {data.map((options) => (
              <div className="menu-category">
                <NavLink
                  to={options.name}
                  className="navlink"
                  onClick={() => {
                    setopenmenu(false);
                    ref.current.style.filter = " grayscale(0)opacity(1)";
                    setcategory(options.name);
                  }}
                >
                  {options.name}
                </NavLink>
                <div className="optcount">{options["menu-items"].length}</div>
              </div>
            ))}
            <div className="menu-category">
              <NavLink
                className="navlink"
                onClick={() => {
                  setopenmenu(false);
                  ref.current.style.filter = " grayscale(0)opacity(1)";
                  setcategory("");
                }}
              >
                All
              </NavLink>
              <div className="optcount">{dishes.length}</div>
            </div>
          </div>
        )}
        <button
          className="browsemenu"
          onClick={() => {
            setopenmenu(!openmenu);
            bluroutbg(openmenu);
          }}
        >
          Browse Menu
        </button>
      </div>
      {cartcount != 0 && (
        <div className="showaddedtocart">
          <div className="leftcart">
            {" "}
            {cartcount} items |₹ {cartTotal}
          </div>
          <div className="rightcart">
            {" "}
            <NavLink to="/Cart" className="navlinkright">
              VIEW CART
            </NavLink>
            <img src="./bag.png" className="rightcartimg" />
          </div>
        </div>
      )}

      <Up />
    </div>
  );
};
