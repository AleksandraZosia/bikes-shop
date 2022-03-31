import FirstBikeImg from "./img/bike-2.svg";
import SecondBikeImg from "./img/bike-3.svg";
import ThirdBikeImg from "./img/bike-4.svg";
import allColors from "./img/Ellipse 8.svg";
import color1 from "./img/Ellipse 9.svg";
import color2 from "./img/Ellipse 10.svg";
import color3 from "./img/Ellipse 11.svg";
import color4 from "./img/Ellipse 12.svg";
import color5 from "./img/Ellipse 13.svg";
import color6 from "./img/Ellipse 14.svg";
import React, { useState } from "react";
import { DisplayContent } from "./App.js";

const colorsArr = [
  { img: allColors, data: "wielokolorowy", objectID: 1 },
  { img: color1, data: "czarny", objectID: 2 },
  { img: color2, data: "biały", objectID: 3 },
  { img: color3, data: "różowy", objectID: 4 },
  { img: color4, data: "beżowy", objectID: 5 },
  { img: color5, data: "zielony", objectID: 6 },
  { img: color6, data: "niebieski", objectID: 7 },
];
export const typesArr = [
  { data: "all", text: "Wszystkie", objectID: 1 },
  { data: "szosa", text: "Szosa", objectID: 2 },
  { data: "góral", text: "Góral", objectID: 3 },
  { data: "miejski", text: "Miejski", objectID: 4 },
];

export const bikes = [
  {
    img: FirstBikeImg,
    type: "szosa",
    colors: ["biały", "różowy", "beżowy", "czarny"],
    wheels: "Koła 700c 28”",
    weight: "7,5 kg",
    gears: 3,
    objectID: 1,
  },
  {
    img: SecondBikeImg,
    type: "góral",
    colors: ["wielokolorowy", "niebieski", "zielony"],
    wheels: "Koła 700c 28”",
    weight: "7,5 kg",
    gears: 3,
    objectID: 2,
  },
  {
    img: ThirdBikeImg,
    type: "miejski",
    colors: [
      "biały",
      "różowy",
      "beżowy",
      "wielokolorowy",
      "niebieski",
      "zielony",
    ],
    wheels: "Koła 700c 28”",
    weight: "7,5 kg",
    gears: 3,
    objectID: 3,
  },
];

const BikesPage = (props) => {
  const RenderThings = ({ choosenType }) => {
    const [filteredBikes, setFilterdedBikes] = React.useState(
      choosenType.img ? choosenType : bikes
    );
    const filterBikes = (event) => {
      const target = event.target;
      return target.closest(".btn-select-color")
        ? setFilterdedBikes(bikesByColor(bikes, target))
        : setFilterdedBikes(bikesByType(bikes, target));
    };

    return (
      <>
        <span className="choice-btns">
          <div className="choose-type">
            <p>Typ roweru</p>
            <SelectTypeBtn props={typesArr} selectType={filterBikes} />
          </div>
          <SelectColourBtn props={colorsArr} selectBikeByColor={filterBikes} />
        </span>
        <ShowBikes bikes={filteredBikes} />
      </>
    );
  };

  return (
    <div className="bikes-page">
      <RenderThings choosenType={props} />
    </div>
  );
};

export const SelectTypeBtn = ({ props, selectType, text = "" }) => {
  return (
    <>
      {props.map((type) => {
        return (
          <span key={type.objectID}>
            <button
              className="btn-select-type"
              data-type={type.data}
              onClick={selectType}
            >
              {text ? text : type.text}
            </button>
          </span>
        );
      })}
    </>
  );
};

const SelectColourBtn = ({ props, selectBikeByColor }) => {
  return (
    <div className="choose-colour">
      <p>Kolor</p>
      <>
        {props.map((el) => (
          <button
            className="btn-select-color"
            data-color={el.data}
            onClick={selectBikeByColor}
            key={el.objectID}
          >
            <img className="color" src={el.img} alt={el.data} />
          </button>
        ))}
      </>
    </div>
  );
};

const bikesByColor = (bikes, target) => {
  const clicked = target.closest(".btn-select-color");
  const selectedBike = bikes.filter((bike) =>
    bike.colors.includes(clicked.dataset.color)
  );

  return selectedBike;
};
const bikesByType = (bikes, target) => {
  const clicked = target.closest(".btn-select-type");
  if (target.dataset.type === "all") return bikes;
  else {
    const selectedBikes = bikes.filter((bike) =>
      bike.type.includes(target.dataset.type)
    );

    return selectedBikes;
  }
};

const stringToUpperCase = (string) =>
  string.slice(0, 1).toUpperCase() + string.slice(1);

const ShowBikes = ({ bikes }) => {
  return (
    <div className="bike-section">
      {bikes.map((bike) => (
        <div className="bike-container" key={bike.objectID}>
          <img className="bike-type-img" src={bike.img} />

          <p>
            {stringToUpperCase(bike.type)} - {bike.colors.length} kolory do
            wyboru
          </p>
          <p>{bike.gears} kombinacje przerzutek</p>
          <p>{bike.wheels}</p>
          <p>Waga: {bike.weight}</p>
        </div>
      ))}
    </div>
  );
};

export { BikesPage };
