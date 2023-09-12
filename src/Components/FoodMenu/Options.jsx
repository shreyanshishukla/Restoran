import Search from "./Search";
import "../../Styles/Search.css";
import { useRef, useState } from "react";
export default ({ filterfood, sortfood, searchingfunction, searching }) => {
  const btn1 = useRef();
  const btn2 = useRef();
  const [activebtn1, setactivebtn1] = useState(false);
  const [activebtn2, setactivebtn2] = useState(false);

  return (
    <div className="FMoptions">
      <div className="opt1">
        {!searching && (
          <>
            <div className="vegonly">
              <input
                type="radio"
                name="foodtype"
                value="Veg"
                onClick={() => filterfood(1)}
              />
              <label for="Veg" className="veg">
                Veg
              </label>
              <input
                type="radio"
                name="foodtype"
                value="NonVeg"
                onClick={() => filterfood(2)}
              />
              <label for="Non-veg" className="non-veg">
                NonVeg
              </label>
              <input
                type="radio"
                name="foodtype"
                value="All"
                onClick={() => filterfood(0)}
              />
              <label for="All" className="all">
                All
              </label>
            </div>

            <div classname="sortbtns">
              <button
                className="sort-btn"
                ref={btn1}
                onClick={() => {
                  sortfood(1);
                  if (!activebtn1) {
                    setactivebtn1(true);
                    btn1.current.style.color = "white";
                    btn1.current.style.backgroundColor = "rgb(73, 73, 130)";
                  } else {
                    setactivebtn1(false);
                    btn1.current.style.color = "rgb(73, 73, 130)";
                    btn1.current.style.backgroundColor = "white";
                  }
                }}
              >
                High to Low
              </button>
              <button
                className="sort-btn"
                onClick={() => {
                  sortfood(2);
                  if (!activebtn2) {
                    setactivebtn2(true);
                    btn2.current.style.color = "white";
                    btn2.current.style.backgroundColor = "rgb(73, 73, 130)";
                  } else {
                    setactivebtn2(false);
                    btn2.current.style.color = "rgb(73, 73, 130)";
                    btn2.current.style.backgroundColor = "white";
                  }
                }}
                ref={btn2}
              >
                Low to High
              </button>
            </div>
          </>
        )}
        <div className="searchh">
          {searching && <Search searchingfunction={searchingfunction} />}
          {!searching && (
            <button
              className="searchbtn"
              onClick={() => searchingfunction(true)}
            >
              <img src="./Search.png" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
