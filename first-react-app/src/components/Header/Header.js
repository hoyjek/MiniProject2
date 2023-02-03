import React from "react";
import "./Header.css";
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
const Header = ({ size, setShow }) => {
  return (
    <header>
      <a href="#header" className="logo">
        <img
          id="logo"
          src={require("../../public/assets/ValensLogo.png")}
          alt="Logo"
        />
      </a>
      <ul className="navigation">
        <li>
          <a href="#banner" onClick={() => setShow(true)}>
            Home
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#location">Location</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#menu" className="cart" onClick={() => setShow(false)}>
            <i className="fas fa-cart-plus"></i>
          </a>
          <span>{size}</span>
        </li>
      </ul>
    </header>
  );
};
export default Header;
