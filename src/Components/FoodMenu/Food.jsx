import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../Utils/Reducer";
import { useRef, useState } from "react";

export default () => {
  const { options } = useParams();
  const data = useSelector((data) => data.menudata.menudata);
  const [option] = data.filter((d) => d.name == options);
  const [cart, setCart] = useState([]);
  const list = { ...option }["menu-items"];
  const l2 = { ...list };
  const dispatcher = useDispatch();

  const AddToCart = (data) => {
    dispatcher(addToCart({ ...data, quantity: 1 }));
  };

  return (
    <>
      Food
      {Object.keys(l2).map((k) => (
        <div className="outerdiv">
          <div className="dishname">
            {l2[k].name} <p> {l2[k].veg}</p>
          </div>

          <div className="dishes">
            {l2[k]["sub-items"].map((i, index) => (
              <div>
                <p> {i.name}</p>
                <p> {i.price}</p>

                <button
                  onClick={() =>
                    AddToCart({
                      name: l2[k].name,
                      type: i.name,
                      price: i.price,
                      veg: l2[k].veg,
                    })
                  }
                  className="addtocartbutton"
                >
                  Add +
                </button>
              </div>
            ))}
          </div>
          <img src="../dish.png" className="img"></img>
        </div>
      ))}
    </>
  );
};
