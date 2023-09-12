import { useDispatch } from "react-redux";
import "../../Styles/Foodmenu.css";
import { addToCart } from "../../Utils/Reducer";

export default ({ dish }) => {
  const dispatcher = useDispatch();
  return (
    <div className="FoodMenu-dishes" key={dish}>
      <div className="FMleft">
        <div className="dishes-img">
          <button
            className="addToCart"
            onClick={() => {
              console.log("addind");
              dispatcher(
                addToCart({
                  name: dish.name,
                  type: dish["sub-items"][0].name,
                  price: +dish["sub-items"][0].price,
                  veg: dish.veg,
                  quantity: 1,
                  id: dish.id,
                })
              );
            }}
          >
            Add +
          </button>

          {dish.veg ? <img src="./veg.png" /> : <img src="./nonveg.png" />}
        </div>

        <div className="dishnamelist">{dish.name}</div>
        <div className="dishpricelist">₹{dish["sub-items"][0].price}</div>
        <div className="dishdescriptionlist">{dish.description}</div>
      </div>
      <div className="FMright">
        {dish.images != [] && <img src={dish.images[0]} />}
      </div>
    </div>
  );
};
