import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
   return (
    <nav>
      <ul style={navStyle}>
        <li style={navItemStyle}>
          <a href="/" style={navLinkStyle}>Home</a>
        </li>
        <li style={navItemStyle}>
          <a href="/search" style={navLinkStyle}>Search</a>
        </li>
        <li style={navItemStyle}>
          <a href="/foods" style={navLinkStyle}>Foods</a>
        </li>
      </ul>
    </nav>
  );
}

const navStyle = {
  background: '#333',
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  padding: '10px',
};

const navItemStyle = {
  margin: '0 10px',
};

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
};
export default NavBar;
