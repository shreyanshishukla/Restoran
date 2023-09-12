import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, loadDishes, sortasc, sortdec } from "../../Utils/Reducer";
import { useEffect, useRef, useState } from "react";
import Dish from "./Dish";
import "../../Styles/Foodmenu.css";
export default ({ filtertype, sorttype, category }) => {
  const data = useSelector((data) => data.menudata.menudata);
  const dishes = useSelector((data) => data.menudata.dishes);
  const dispatcher = useDispatch();

  useEffect(() => {
    if (sorttype == 0) dispatcher(loadDishes());
    else if (sorttype == 1) dispatcher(sortdec());
    else dispatcher(sortasc());
  }, [sorttype]);
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
