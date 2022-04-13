import { Outlet, NavLink } from "react-router-dom";
import home from "./img/home.svg";
import bikeIcon from "./img/bike-icon.svg";
import logo from "./img/logo.svg";
import "./App.css";
import React from "react";

function App() {
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
      <NavBtn text={"home"} Item={HomeItem} />
      <NavBtn text={"bikes"} Item={BikesItem} />{" "}
      <img src={logo} className="logo" alt="logo sklepu" />
    </div>
  );
};

// /////////////////////////////Buttons///////////

const NavBtn = ({ Item, text }) => {
  return (
    <span>
      <NavLink to={`/${text}`}>
        <button className="btn-nav" data-page={text}>
          <Item />
        </button>
      </NavLink>
    </span>
  );
};

const HomeItem = () => <img src={home} alt="Ikona strony domowej"></img>;
const BikesItem = () => <img src={bikeIcon} alt="Ikona katalogu rowerów"></img>;
///////////////////////

export default App;
