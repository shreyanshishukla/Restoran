import Search from "./Search";
import "../../Styles/Search.css";
import { useRef, useState } from "react";
import Veg from "./Veg";
import Sort from "./Sort";
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
            <Veg filterfood={filterfood} />
            <Sort
              btn1={btn1}
              btn2={btn2}
              setactivebtn1={setactivebtn1}
              setactivebtn2={setactivebtn2}
              sortfood={sortfood}
              activebtn1={activebtn1}
              activebtn2={activebtn2}
            />
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
