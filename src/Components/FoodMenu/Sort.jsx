export default ({
  btn1,
  btn2,
  setactivebtn1,
  setactivebtn2,
  sortfood,
  activebtn1,
  activebtn2,
}) => {
  return (
    <div classname="sortbtns">
      <button
        className="sort-btn"
        ref={btn1}
        onClick={() => {
          sortfood(1);
          if (!activebtn1) {
            setactivebtn1(true);
            setactivebtn2(false);

            btn1.current.style.color = "white";
            btn1.current.style.backgroundColor = "rgb(73, 73, 130)";
            btn2.current.style.color = "rgb(73, 73, 130)";
            btn2.current.style.backgroundColor = "white";
          } else {
            setactivebtn1(false);
            setactivebtn2(false);

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
            setactivebtn1(false);

            btn2.current.style.color = "white";
            btn2.current.style.backgroundColor = "rgb(73, 73, 130)";
            btn1.current.style.color = "rgb(73, 73, 130)";
            btn1.current.style.backgroundColor = "white";
          } else {
            setactivebtn2(false);
            setactivebtn1(false);

            btn2.current.style.color = "rgb(73, 73, 130)";
            btn2.current.style.backgroundColor = "white";
          }
        }}
        ref={btn2}
      >
        Low to High
      </button>
    </div>
  );
};
