import { Link, NavLink } from "react-router-dom";

export default function Navbar(params) {
  let links = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contacts" },
    { to: "/users", text: "Users" }
  ];

  let initLink = {
    textDecoration: "none",
    color: "black"
  };

  let activeLink = {
    color: "red"
  };

  return (
    // <div>
    //   <Link to="/">Home</Link> <Link to="/about">About</Link>{" "}
    //   <Link to="/contact">Contacts</Link> <Link to="/users">Users</Link>
    // </div>

    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {links.map((link, index) => {
        return (
          <NavLink
            key={index}
            style={({ isActive }) => {
              return isActive ? activeLink : initLink;
            }}
            to={link.to}
          >
            {link.text}
          </NavLink>
        );
      })}
    </div>
  );
}
