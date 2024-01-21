import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      TextDecoration: isActive ? "none" : "underline",
    };
  };

  const navbarStyles = {
    paddingBlock: "2rem",
    backgroundColor: "#333",
  };

  const navbarInnerStyles = {
    display: "flex",
    gap: "16px",
  };

  return (
    <nav style={navbarStyles}>
      <div className="container" style={navbarInnerStyles}>
        <NavLink style={navLinkStyles} to="/">
          Homepage
        </NavLink>
      </div>
    </nav>
  );
};
