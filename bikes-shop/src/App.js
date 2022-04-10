import home from "./img/home.svg";
import bikeIcon from "./img/bike-icon.svg";
import logo from "./img/logo.svg";
import "./App.css";
import { HomePage } from "./homePage.js";
import { bikes, BikesPage } from "./bikesPage.js";
import React, { useState } from "react";

function App() {
  const [Page, setPage] = React.useState(() => HomePage);
  const [filteredBikes, setFilterdedBikes] = React.useState(bikes);
  const handleChange = (page, choosenType) => () => {
    if (page === "home") setPage(() => HomePage);
    if (page === "bikes") setPage(() => BikesPage);
    setFilterdedBikes(choosenType);
  };
  return (
    <div className="App">
      <Nav onChange={handleChange} />

      {/* <div className="content"> */}
      <Page onChange={handleChange} choosenType={filteredBikes} />
      {/* </div> */}
    </div>
  );
}

////////////////////Display Control//////////
const Nav = ({ onChange }) => {
  return (
    <div>
      <div className="nav">
        <NavBtn displayPage={onChange("home")} Item={HomeItem} text="home" />{" "}
        <NavBtn displayPage={onChange("bikes")} Item={BikesItem} text="bikes" />{" "}
        <img src={logo} className="logo" alt="logo sklepu" />
      </div>
    </div>
  );
};
const DisplayContent = ({ Page, onChange, choosenType }) => {
  return <Page onChange={onChange} choosenType={choosenType} />;
};

/////////////////////////////Buttons///////////

const NavBtn = ({ displayPage, Item, text }) => {
  return (
    <span>
      <button className="btn-nav" data-page={text} onClick={displayPage}>
        <Item />
      </button>
    </span>
  );
};

const HomeItem = () => <img src={home} alt="Ikona strony domowej"></img>;
const BikesItem = () => <img src={bikeIcon} alt="Ikona katalogu rowerów"></img>;
///////////////////////

export { DisplayContent };
export default App;
