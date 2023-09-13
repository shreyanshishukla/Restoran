import { useDispatch, useSelector } from "react-redux";
import "../../Styles/Cart.css";
import { clearCart } from "../../Utils/Reducer";
import CartItem from "./CartItem";
import Bill from "./Bill";
import useCart from "../../Utils/useCart";

export default () => {
  const { cartitems, dispatcher } = useCart();

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
              return <CartItem item={item} />;
            })}
          </div>
          <Bill cartitems={cartitems} />
        </div>
      )}
      {cartitems.cartCount == 0 && (
        <div className="oops">Oops nothing in cart!</div>
      )}
    </>
  );
};
