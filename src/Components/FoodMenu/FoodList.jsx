import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, loadDishes, sortasc, sortdec } from "../../Utils/Reducer";
import { useEffect, useRef, useState } from "react";
import Dish from "./Dish";
import "../../Styles/Foodmenu.css";
import useFoodlist from "../../Utils/useFoodlist";
export default ({ filtertype, sorttype, category }) => {
  useEffect(() => console.log(category), [category]);
  const { data, dishes } = useFoodlist({ sorttype });
  return (
    <>
      <div className="FLouter">
        <h1 className="FLh1"> Available Dishes ➡</h1>
        <div className="FLitems">
          {dishes.map((dish) => {
            if (
              (filtertype == 0 ||
                (filtertype == 1 && dish.veg) ||
                (filtertype == 2 && !dish.veg)) &&
              (category == "" || category == dish.type)
            )
              return <Dish dish={dish} />;
            return false;
          })}
        </div>
      </div>
    </>
  );
};
