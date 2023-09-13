import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadDishes, sortasc, sortdec } from "./Reducer";

export default ({ sorttype }) => {
  const data = useSelector((data) => data.menudata.menudata);
  const dishes = useSelector((data) => data.menudata.dishes);
  const dispatcher = useDispatch();

  useEffect(() => {
    if (sorttype == 0) dispatcher(loadDishes());
    else if (sorttype == 1) dispatcher(sortdec());
    else dispatcher(sortasc());
  }, [sorttype]);
  return { data, dishes };
};
