import { useDispatch, useSelector } from "react-redux";
import { addOneMore, deleteFromCart, removeOne } from "../../Utils/Reducer";
export default ({ item }) => {
  const dispatcher = useDispatch();
  return (
    <>
      <div className="cartitem">
        <div className="cartitemimg">
          {item.veg && <img src="./veg.png" className="veg" />}
          {!item.veg && <img src="./nonveg.png" className="nonveg" />}
        </div>
        <div className="cartcol">
          <div className="cartitemname">{item.name}</div>
          <div className="cartitemtype">{item.type}</div>
        </div>
        <div className="cartitemquantity">
          <button
            className="cartremove"
            onClick={() => dispatcher(removeOne(item.id))}
          >
            -
          </button>
          <div className="cartitemquantityval">{item.quantity}</div>
          <button
            className="cartadd"
            onClick={() => dispatcher(addOneMore(item.id))}
          >
            +
          </button>
        </div>
        <div className="cartitemprice">₹{item.price}</div>
        <button
          className="deleteitem"
          onClick={() => dispatcher(deleteFromCart(item.id))}
        >
          <img src="./Delete.png" />
        </button>
      </div>
    </>
  );
};
