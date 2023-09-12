import { useState } from "react";
import { useSelector } from "react-redux";
import Dish from "./Dish";
import "../../Styles/Search.css";

export default ({ searchingfunction }) => {
  const dishes = useSelector((d) => d.menudata.dishes);
  const [searchquery, setsearchquery] = useState("");

  const searchdish = (val) => {
    setsearchquery(val);
  };

  return (
    <>
      <div className="search_area">
        <div className="searchbar">
          <div className="searchtop">
            <button
              className="backbtn"
              onClick={() => searchingfunction(false)}
            >
              ⬅
            </button>
            <div className="searcharea">
              <input
                type="text"
                className="searchinput"
                onChange={(e) => {
                  searchdish(e.target.value);
                }}
              />
              <button className="searchbtn">
                <img src="./Search.png" />
              </button>
            </div>
          </div>
        </div>
        <div className="searchdata">
          {searchquery != "" &&
            dishes.map((d) => {
              if (
                d.name
                  .toString()
                  .toLowerCase()
                  .indexOf(searchquery.toLowerCase()) > -1
              ) {
                return <Dish dish={d} />;
              }
            })}
        </div>
      </div>
    </>
  );
};
