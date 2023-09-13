import { NavLink } from "react-router-dom";

export default ({ cartTotal, cartcount }) => {
  return (
    <div className="showaddedtocart">
      <div className="leftcart">
        {" "}
        {cartcount} items |₹ {cartTotal}
      </div>
      <div className="rightcart">
        {" "}
        <NavLink to="/Cart" className="navlinkright">
          VIEW CART
        </NavLink>
        <img src="./bag.png" className="rightcartimg" />
      </div>
    </div>
  );
};
