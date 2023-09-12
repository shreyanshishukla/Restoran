import { Padding } from "@mui/icons-material";

export const NavLinkIsActive = (active) => {
  if (active)
    return {
      color: "#F4D160",
      textDecoration: "none",
      border: "solid white 2px",
      padding: "10px",
      borderRadius: "5px",
    };
  return {
    color: "rgb(43, 41, 41)",
    textDecoration: "none",
  };
};
