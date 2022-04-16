import ExampleBike from "../img/bike-1.svg";
import FirstBikeImg from "../img/bike-2.svg";
import SecondBikeImg from "../img/bike-3.svg";
import ThirdBikeImg from "../img/bike-4.svg";
import { BikesPage, typesArr, bikes, SelectTypeBtn } from "./bikesPage.js";

export default function HomePage({}) {
  return (
    <div className="home-page">
      <div className="introduction">
        <div className="paragraph bikes-introduction">
          <h1>Wybierz się na Mazury</h1>
          <p>
            Mazury to ultralekkie rowery tworzone z pasją w niewielkiej
            manufakturze w Szczytnie. Świetnie sprawdzą się zarówno na leśnej
            drodze, jak i w miejskiej dżungli.
          </p>{" "}
          <SelectTypeBtn
            text="Pokaż rowery!"
            creationArr={typesArr.filter((type) => type.data === "all")}
            className="link-bikes"
            id="btn-show-all"
          />{" "}
        </div>
        <div className="example-bike">
          {" "}
          <img id="img-example-bike" src={ExampleBike} alt="Rysunkowy rower" />
        </div>
      </div>

      <h2>Jaki model jest idealny dla Ciebie?</h2>
      <div className="content">
        {" "}
        <img
          className="content-bike-img"
          src={FirstBikeImg}
          alt="Rower typu szosa"
        />
        <div className="paragraph bike-description">
          <h3>Szosa</h3>
          <p>
            To rower dla miłośników prędkości i gładkich, asfaltowych tras.
            Świetnie sprawdzi się również w mieście. Jest szybki i ultralekki.
            Waży już od 7,8kg!
          </p>

          <SelectTypeBtn
            creationArr={typesArr.filter((type) => type.data === "szosa")}
            className="link-bikes"
          />
        </div>
        <div className="paragraph bike-description" id="goral">
          <h3>Góral</h3>

          <p>
            Pogromca w dzikim terenie. Rower na misje specjalne. Pozwala skakać
            przez przeszkody w lesie, jak i pojedzie po piaszczystej plaży. W
            razie potrzeby możesz na nim pokonać także górski strumień. Nigdy
            Cię nie zawiedzie.
          </p>

          <SelectTypeBtn
            className="link-bikes"
            creationArr={typesArr.filter((type) => type.data === "góral")}
          />
        </div>
        <div>
          <img src={SecondBikeImg} alt="Rower typu góral" />
        </div>
        <div>
          <img src={ThirdBikeImg} alt="Rower typu miejskiego" />
        </div>
        <div className="paragraph bike-description">
          <h3>Miejski</h3>
          <p>
            Wygodny jak fotel uszatek, pozwala na jazdę po mieście w luksusowych
            warunkach. Dojedziesz nim do pracy, na uczelnię, ale także na piknik
            pod miastem, ponieważ nie ogranicza go jedynie asfalt.
          </p>
          <SelectTypeBtn
            className="link-bikes"
            creationArr={typesArr.filter((type) => type.data === "miejski")}
          />{" "}
        </div>
      </div>
    </div>
  );
}
