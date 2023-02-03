import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header.js";
import AboutPage from "./components/AboutPage/AboutPage";
import FoodMenu from "./components/FoodMenu/FoodMenu";
import Location from "./components/Location/Location";
import Contacts from "./components/Contacts/Contacts";
import Cart from "./components/FoodMenu/Cart";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) return;
    setCart([...cart, item]);
  };

  return (
    <React.Fragment>
      <Banner />
      <AboutPage />
      <Header size={cart.length} setShow={setShow} />
      {show ? (
        <FoodMenu handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}
      <Location />
      <Contacts />
    </React.Fragment>
  );
};

export default App;
