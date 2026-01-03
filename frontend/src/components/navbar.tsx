import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // your logo file

function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#eee",
        padding: "0.5rem 1rem",
        display: "flex",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      {/* Logo replaces "Home" */}
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          style={{ height: "40px", marginRight: "1rem" }}
        />
      </Link>

      {/* Other links */}
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/about">About</Link>
        <Link to="/jobs">Job Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;
