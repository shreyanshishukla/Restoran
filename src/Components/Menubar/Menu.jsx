import { DinnerDining, FoodBank } from "@mui/icons-material";
import { Button } from "@mui/material";
import { NavLinkIsActive } from "../../Styles/Style";
import "../../Styles/Menu.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useMenubar from "../../Utils/useHeader.js";
import useHeader from "../../Utils/useHeader.js";
import Badge from "./Badge";
import Menuoptions from "./Menuoptions";
export default ({ abt }) => {
  const { menuoptions, navigate, data, showBadge, setShowBadge } = useHeader();
  return (
    <>
      <div className="menu">
        <div className="logo">
          <FoodBank sx={{ height: 100, width: 50, color: "#fcb730" }} />
          <div className="logo-text"> Resotran</div>
        </div>
        <div className="menulist">
          {menuoptions.map((options) => (
            <Menuoptions options={options} setShowBadge={setShowBadge} />
          ))}
          <Badge
            setShowBadge={setShowBadge}
            showBadge={showBadge}
            data={data}
          />
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
