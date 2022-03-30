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
  { img: allColors, data: "wielokolorowy" },
  { img: color1, data: "czarny" },
  { img: color2, data: "biały" },
  { img: color3, data: "różowy" },
  { img: color4, data: "beżowy" },
  { img: color5, data: "zielony" },
  { img: color6, data: "niebieski" },
];
const typesArr = [
  { data: "all", text: "Wszystkie" },
  { data: "szosa", text: "Szosa" },
  { data: "góral", text: "Góral" },
  { data: "miejski", text: "Miejski" },
];

const BikesPage = () => {
  const bikes = [
    {
      img: FirstBikeImg,
      type: "szosa",
      colors: colorsArr.map((color) => color.data),
      wheels: "Koła 700c 28”",
      weight: "7,5 kg",
      gears: 3,
      objectID: 1,
    },
    {
      img: SecondBikeImg,
      type: "góral",
      colors: colorsArr.map((color) => color.data).slice(2),
      wheels: "Koła 700c 28”",
      weight: "7,5 kg",
      gears: 3,
      objectID: 2,
    },
    {
      img: ThirdBikeImg,
      type: "miejski",
      colors: colorsArr.map((color) => color.data),
      wheels: "Koła 700c 28”",
      weight: "7,5 kg",
      gears: 3,
      objectID: 3,
    },
  ];

  const RenderThings = () => {
    const [filteredBikes, setFilterdedBikes] = React.useState(bikes);
    const filterBikes = (event) => {
      const target = event.target;
      return target.closest(".btn-select-color")
        ? setFilterdedBikes(bikesByColor(bikes, target))
        : setFilterdedBikes(bikesByType(bikes, target));
    };
    console.log(filteredBikes);
    return (
      <>
        <span className="choice-btns">
          <SelectTypeBtn props={typesArr} selectByType={filterBikes} />

          <SelectColourBtn props={colorsArr} selectBikeByColor={filterBikes} />
        </span>
        <ShowBikes bikes={filteredBikes} />
      </>
    );
  };

  return (
    <div className="bikes-page">
      <RenderThings />
    </div>
  );
};

const SelectTypeBtn = ({ props, selectByType }) => {
  return (
    <div className="choose-type">
      <p>Typ roweru</p>
      {props.map((type) => {
        return (
          <span>
            <button
              className="btn-select-type"
              data-type={type.data}
              onClick={selectByType}
            >
              {type.text}
            </button>
          </span>
        );
      })}
    </div>
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
          >
            <img src={el.img} alt={el.data} />
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

const ShowBikes = ({ bikes }) => (
  <div className="bike-section">
    {bikes.map((bike) => (
      <div className="bike-container" key={bike.objectID}>
        <img className="bike-type-img" src={bike.img} />

        <p>
          {stringToUpperCase(bike.type)} - {bike.colors.length} kolory do wyboru
        </p>
        <p>{bike.gears} kombinacje przerzutek</p>
        <p>{bike.wheels}</p>
        <p>Waga: {bike.weight}</p>
      </div>
    ))}
  </div>
);

export { BikesPage };
