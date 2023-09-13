import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default () => {
  const menuoptions = ["Home", "About", "Service", "Menu", "Contact"];
  const navigate = useNavigate();
  const data = useSelector((data) => data.cart.cartCount);
  const [showBadge, setShowBadge] = useState(false);
  return { menuoptions, navigate, data, showBadge, setShowBadge };
};
