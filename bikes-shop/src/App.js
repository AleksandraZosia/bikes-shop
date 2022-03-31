import home from "./img/home.svg";
import bikeIcon from "./img/bike-icon.svg";
import logo from "./img/logo.svg";
import "./App.css";
import { HomePage } from "./homePage.js";
import { BikesPage } from "./bikesPage.js";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <Nav />

      <div className="content"></div>
    </div>
  );
}
////////////////////Display Control//////////
const Nav = () => {
  const [page, setPage] = React.useState(HomePage);
  const handleChange = (event) => {
    if (event.target.closest(".btn-nav").dataset.page === "home")
      setPage(HomePage);
    if (event.target.closest(".btn-nav").dataset.page === "bikes")
      setPage(BikesPage);
    return page;
  };
  return (
    <div>
      <div className="nav">
        <HomePageBtn displayPage={handleChange} Item={HomeItem} />{" "}
        <BikesPageBtn displayPage={handleChange} Item={BikesItem} />{" "}
        <img src={logo} className="logo" alt="logo sklepu" />
      </div>
      <DisplayContent Page={() => page} />
    </div>
  );
};
const DisplayContent = ({ Page }) => {
  return <Page />;
};

/////////////////////////////Buttons///////////

const HomePageBtn = ({ displayPage, Item }) => {
  return (
    <span>
      <button
        className="btn-nav btn-home-page"
        data-page="home"
        onClick={displayPage}
      >
        <Item />
      </button>
    </span>
  );
};
const BikesPageBtn = ({ displayPage, Item }) => {
  return (
    <span>
      <button
        className="btn-nav btn-bikes-page"
        data-page="bikes"
        onClick={displayPage}
      >
        <Item />
      </button>
    </span>
  );
};

const HomeItem = () => <img src={home} alt="Ikona strony domowej"></img>;
const BikesItem = () => <img src={bikeIcon} alt="Ikona katalogu rowerów"></img>;
///////////////////////

const CartPage = () => {
  return (
    <div>
      <p>Koszyk</p>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div>
      <p>Kontakt</p>
    </div>
  );
};

export { DisplayContent };
export default App;
