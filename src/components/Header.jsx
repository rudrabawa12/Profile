import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="header">
      <h2 className="logo">My Portfolio</h2>

      {/* Hamburger button */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* Nav */}
      <nav className={open ? "nav active" : "nav"}>
        {navItems.map((item) => (
          <Link key={item.path} to={item.path} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;