import { useRef, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../Styles/Foodmenu.css";
import FoodList from "./FoodList";
import Options from "./Options";
import Up from "../Up/Up";
import useMenu from "../../Utils/useMenu";
import ViewCart from "../ViewCart/ViewCart";
import { ShowChart } from "@mui/icons-material";

export default () => {
  const ref = useRef();
  const {
    filterfood,
    sortfood,
    searchingfunction,
    searching,
    filtertype,
    sorttype,
    openmenu,
    data,
    dishes,
    setopenmenu,

    cartTotal,
    cartcount,
  } = useMenu();
  const [category, setcategory] = useState("");
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
      {cartcount != 0 && !searching && (
        <ViewCart cartTotal={cartTotal} cartcount={cartcount} />
      )}

      <Up />
    </div>
  );
};
