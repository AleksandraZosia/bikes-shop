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
  const [page, setPage] = React.useState(BikesPage);
  const handleChange = (event) => {
    console.log(event);
    if (event.target.closest(".btn-nav").dataset.page === "home")
      setPage(HomePage);
    if (event.target.closest(".btn-nav").dataset.page === "bikes")
      setPage(BikesPage);
    return page;
  };
  return (
    <div>
      <div>
        <HomePageBtn displayPage={handleChange} />{" "}
        <BikesPageBtn displayPage={handleChange} />{" "}
        <img src={logo} className="App-logo" alt="logo sklepu" />
      </div>
      <DisplayContent Page={() => page} />
    </div>
  );
};
const DisplayContent = ({ Page }) => {
  console.log(Page());
  return <Page />;
};

/////////////////////////////Buttons///////////

const HomePageBtn = ({ displayPage }) => {
  return (
    <span>
      <button
        className="btn-nav btn-home-page"
        data-page="home"
        onClick={displayPage}
      >
        <img src={home} alt="Ikona strony domowej"></img>
      </button>
    </span>
  );
};
const BikesPageBtn = ({ displayPage }) => {
  return (
    <span>
      <button
        className="btn-nav btn-bikes-page"
        data-page="bikes"
        onClick={displayPage}
      >
        <img src={bikeIcon} alt="Ikona strony domowej"></img>
      </button>
    </span>
  );
};
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
