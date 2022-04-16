import { useParams } from "react-router-dom";
import { stringToUpperCase, bikes } from "./bikesPage";
import React from "react";

const getBikesID = (bikesId) => {
  const bikesTypes = bikes.filter((bike) => bike.type.includes(bikesId));

  const bikesColors = bikes.filter((bike) => bike.colors.includes(bikesId));
  if (bikesTypes.length !== 0) return bikesTypes;
  if (bikesColors.length !== 0) return bikesColors;
};

export const ShowBikes = () => {
  let params = useParams();
  const choosenBikes = getBikesID(params.bikesID);
  return (
    <div className="bike-section">
      {choosenBikes.map((bike) => (
        <div className="bike-container" key={bike.objectID}>
          <img className="bike-type-img" src={bike.img} />

          <p>
            <strong> {stringToUpperCase(bike.type[0])}</strong> -{" "}
            {bike.colors.length}{" "}
            {bike.colors.length <= 4 ? "kolory" : "kolorów"} do wyboru
          </p>
          <p>{bike.gears} kombinacje przerzutek</p>
          <p>{bike.wheels}</p>
          <p>Waga: {bike.weight}</p>
        </div>
      ))}
    </div>
  );
};
