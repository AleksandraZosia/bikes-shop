import { useSearchParams, Outlet, Link, NavLink } from "react-router-dom";

import FirstBikeImg from "../img/bike-2.svg";
import SecondBikeImg from "../img/bike-3.svg";
import ThirdBikeImg from "../img/bike-4.svg";
import allColors from "../img/Ellipse 8.svg";
import color1 from "../img/Ellipse 9.svg";
import color2 from "../img/Ellipse 10.svg";
import color3 from "../img/Ellipse 11.svg";
import color4 from "../img/Ellipse 12.svg";
import color5 from "../img/Ellipse 13.svg";
import color6 from "../img/Ellipse 14.svg";
import React from "react";

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
    type: ["szosa", "all"],
    colors: ["biały", "różowy", "beżowy", "czarny"],
    wheels: "Koła 700c 28”",
    weight: "7,5 kg",
    gears: 3,
    objectID: 1,
  },
  {
    img: SecondBikeImg,
    type: ["góral", "all"],
    colors: ["wielokolorowy", "niebieski", "zielony"],
    wheels: "Koła 700c 28”",
    weight: "7,5 kg",
    gears: 3,
    objectID: 2,
  },
  {
    img: ThirdBikeImg,
    type: ["miejski", "all"],
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

const BikesPage = () => {
  return (
    <div className="main">
      <div className="choice-btns">
        <div className="choose-type">
          <p>Typ</p>

          <SelectTypeBtn creationArr={typesArr} />
        </div>
        <div>
          <p>Kolor</p>
          <SelectColourBtn creationArr={colorsArr} />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export const SelectTypeBtn = ({ creationArr, text = "" }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      {" "}
      {creationArr.map((type) => {
        return (
          <span key={type.objectID}>
            <Link to={`/bikes/${type.data}`}>
              {" "}
              <button
                className="btn-select-type"
                data-type={searchParams.get("filter") || ""}
                onClick={(event) => {
                  let filter = event.target.dataset.type;
                  if (filter) {
                    setSearchParams({ filter });
                  } else {
                    setSearchParams({});
                  }
                }}
              >
                {text ? text : type.text}
              </button>
            </Link>
          </span>
        );
      })}
    </>
  );
};

const SelectColourBtn = ({ creationArr, selectBikeByColor }) => {
  return (
    <div className="choose-colour">
      <>
        {creationArr.map((el) => (
          <NavLink to={`/bikes/${el.data}`} key={el.objectID}>
            {" "}
            <button
              className="btn-select-color"
              data-color={el.data}
              onClick={selectBikeByColor}
            >
              <img className="color" src={el.img} alt={el.data} />
            </button>
          </NavLink>
        ))}
      </>
    </div>
  );
};

export const stringToUpperCase = (string) =>
  string.slice(0, 1).toUpperCase() + string.slice(1);

export { BikesPage };
