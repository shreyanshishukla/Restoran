import { NavLink } from "react-router-dom";
import { NavLinkIsActive } from "../../Styles/Style";

export default ({ options, setShowBadge }) => {
  return (
    <div className="menu-options" key={options}>
      <NavLink
        to={"/" + options}
        style={({ isActive }) => {
          return NavLinkIsActive(isActive);
        }}
        onClick={() => setShowBadge(true)}
      >
        {options}
      </NavLink>
    </div>
  );
};
