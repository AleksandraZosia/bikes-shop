import { Outlet, Link } from "react-router-dom";
import home from "./img/home.svg";
import bikeIcon from "./img/bike-icon.svg";
import logo from "./img/logo.svg";
import "./App.css";
import HomePage from "./routes/homePage.js";
import { bikes, BikesPage } from "./routes/bikesPage.js";
import React, { useState } from "react";

function App() {
  const [filteredBikes, setFilterdedBikes] = React.useState(bikes);

  return (
    <div className="App">
      {" "}
      <Nav />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

////////////////////Display Control//////////
const Nav = () => {
  return (
    <div className="nav">
      <Link to="/home">
        <NavBtn text={"home"} Item={HomeItem} />
      </Link>
      <Link to="/bikes">
        <NavBtn text={"bikes"} Item={BikesItem} />{" "}
      </Link>
      <img src={logo} className="logo" alt="logo sklepu" />
    </div>
  );
};

// /////////////////////////////Buttons///////////

const NavBtn = ({ Item, text }) => {
  return (
    <span>
      <button className="btn-nav" data-page={text}>
        <Item />
      </button>
    </span>
  );
};

const HomeItem = () => <img src={home} alt="Ikona strony domowej"></img>;
const BikesItem = () => <img src={bikeIcon} alt="Ikona katalogu rowerów"></img>;
///////////////////////

export default App;
