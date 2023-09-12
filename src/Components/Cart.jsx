import { useDispatch, useSelector } from "react-redux";
import "../Styles/Cart.css";
import {
  addOneMore,
  clearCart,
  deleteFromCart,
  removeOne,
} from "../Utils/Reducer";

export default () => {
  const cartitems = useSelector((d) => d.cart);
  const dispatcher = useDispatch();

  return (
    <>
      {cartitems.cartCount != 0 && (
        <div className="cartdata">
          <h2>Total Items in Cart :{cartitems.cartCount}</h2>
          <button className="clearcart" onClick={() => dispatcher(clearCart())}>
            Clear Cart <img src="./delete.png" />
          </button>
          <div className="cartlist">
            {Object.keys(cartitems.cart).map((k) => {
              const item = cartitems.cart[k];
              return (
                <>
                  <div className="cartitem">
                    <div className="cartitemimg">
                      {item.veg && <img src="./veg.png" className="veg" />}
                      {!item.veg && (
                        <img src="./nonveg.png" className="nonveg" />
                      )}
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
            })}
          </div>
          <div className="Bill">
            <h5>Bill Details</h5>
            <div className="billlist">
              <div className="billitem">
                <div className="billitemname">Item Total</div>
                <div className="billitemnamount">₹{cartitems.cartTotal}</div>
              </div>
              <div className="billitem">
                <div className="billitemname">DeliveryFee | 5.5Km</div>
                <div className="billitemnamount">₹89</div>
              </div>
              <div className="discount">
                <div className="billdis">
                  <div className="dis">Item Discount</div>
                  <div className="disamt">₹89</div>
                </div>
              </div>
              <div className="billitem">
                <div className="billitemname">Platform Fee</div>
                <div className="billitemnamount">₹2</div>
              </div>
              <div className="billitem">
                <div className="billitemname">GST and Other Charges</div>
                <div className="billitemnamount">₹89</div>
              </div>
            </div>
          </div>
          <div className="PayAmount">
            <div className="ToPay"> To Pay</div>
            <div className="ToPayAmount">
              {" "}
              ₹{cartitems.cartTotal + 89 + 2 + 89}
            </div>
          </div>
        </div>
      )}
      {cartitems.cartCount == 0 && (
        <div className="oops">Oops nothing in cart!</div>
      )}
    </>
  );
};
