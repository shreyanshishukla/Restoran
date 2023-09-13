import { NavLink } from "react-router-dom";

export default ({ setShowBadge, showBadge, data }) => {
  return (
    <div className="menu-options cart-option" key="Cart">
      <NavLink to="/Cart" onClick={() => setShowBadge(false)}>
        <img src="./shoppingcart.png" className="imgcartbadge"></img>
      </NavLink>
      {showBadge && <div className="cartBadge">{data}</div>}
    </div>
  );
};
