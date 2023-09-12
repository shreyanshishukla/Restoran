import { DinnerDining, FoodBank } from "@mui/icons-material";
import { Button } from "@mui/material";
import { NavLinkIsActive } from "../Styles/Style";
import "../Styles/Menu.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
export default ({ abt }) => {
  const menuoptions = ["Home", "About", "Service", "Menu", "Contact"];
  const navigate = useNavigate();
  const data = useSelector((data) => data.cart.cartCount);
  const [showBadge, setShowBadge] = useState(false);

  return (
    <>
      <div className="menu">
        <div className="logo">
          <FoodBank sx={{ height: 100, width: 50, color: "#fcb730" }} />
          <div className="logo-text"> Resotran</div>
        </div>
        <div className="menulist">
          {menuoptions.map((options) => (
            <div className="menu-options" key={options}>
              {options != "About" && (
                <NavLink
                  to={"/" + options}
                  style={({ isActive }) => {
                    return NavLinkIsActive(isActive);
                  }}
                  onClick={() => setShowBadge(true)}
                >
                  {options}
                </NavLink>
              )}
              {options == "About" && (
                <NavLink
                  style={({ isActive }) => {
                    return NavLinkIsActive(isActive);
                  }}
                  onClick={() => {
                    navigate("/Home#About");
                    setShowBadge(true);
                  }}
                >
                  {options}
                </NavLink>
              )}
            </div>
          ))}
          <div className="menu-options cart-option" key="Cart">
            <NavLink to="/Cart" onClick={() => setShowBadge(false)}>
              <img src="./shoppingcart.png" className="imgcartbadge"></img>
            </NavLink>
            {showBadge && <div className="cartBadge">{data}</div>}
          </div>
          <Button
            startIcon={<DinnerDining />}
            variant="contained"
            sx={{
              color: "#1D5D9B",
              borderColor: "#FBEEAC",
              backgroundColor: "#FCB730",
              fontWeight: 900,

              "&:hover": {
                color: "#FBEEAC",
                borderColor: "#FBEEAC",
              },
            }}
            onClick={() => {
              navigate("/BookATable");
            }}
          >
            Book A Table
          </Button>
        </div>
      </div>
    </>
  );
};
