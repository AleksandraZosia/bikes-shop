import ExampleBike from "./img/bike-1.svg";
import FirstBikeImg from "./img/bike-2.svg";
import SecondBikeImg from "./img/bike-3.svg";
import ThirdBikeImg from "./img/bike-4.svg";
import { BikesPage, typesArr, bikes, SelectTypeBtn } from "./bikesPage.js";
import { DisplayContent } from "./App.js";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="introduction">
        <div className="paragraph bikes-introduction">
          <h1>Wybierz się na Mazury</h1>

          <p>
            Mazury to ultralekkie rowery tworzone z pasją w niewielkiej
            manufakturze w Szczytnie. Świetnie sprawdzą się zarówno na leśnej
            drodze, jak i w miejskiej dżungli.
          </p>
          <SelectTypeBtn
            text="Pokaż rowery!"
            props={typesArr.filter((type) => type.data === "all")}
            selectType={console.log(bikes)}
          />
        </div>
        <div className="example-bike">
          {" "}
          <img src={ExampleBike} alt="Rysunkowy rower" />
        </div>
      </div>

      <h2>Jaki model jest idealny dla Ciebie?</h2>
      <div className="content">
        <div>
          {" "}
          <img src={FirstBikeImg} alt="Rower typu szosa" />
        </div>
        <div className="paragraph first-bike">
          <p>
            <strong>Szosa</strong>
          </p>
          <p>
            To rower dla miłośników prędkości i gładkich, asfaltowych tras.
            Świetnie sprawdzi się również w mieście. Jest szybki i ultralekki.
            Waży już od 7,8kg!
          </p>

          <SelectTypeBtn
            props={typesArr.filter((type) => type.data === "szosa")}
            selectType={() =>
              console.log(bikes.filter((bike) => bike.type.includes("szosa")))
            }
          />
        </div>

        <div className="paragraph second-bike">
          <p>
            <strong>Góral</strong>
          </p>
          <p>
            Pogromca w dzikim terenie. Rower na misje specjalne. Pozwala skakać
            przez przeszkody w lesie, jak i pojedzie po piaszczystej plaży. W
            razie potrzeby możesz na nim pokonać także górski strumień. Nigdy
            Cię nie zawiedzie.
          </p>
          <SelectTypeBtn
            props={typesArr.filter((type) => type.data === "góral")}
            selectType={() =>
              console.log(bikes.filter((bike) => bike.type.includes("szosa")))
            }
          />
        </div>
        <div>
          <img src={SecondBikeImg} alt="Rower typu góral" />
        </div>
        <div>
          <img src={ThirdBikeImg} alt="Rower typu miejskiego" />
        </div>
        <div className="paragraph third-bike">
          <p>
            <strong>Miejski</strong>
          </p>
          <p>
            Wygodny jak fotel uszatek, pozwala na jazdę po mieście w luksusowych
            warunkach. Dojedziesz nim do pracy, na uczelnię, ale także na piknik
            pod miastem, ponieważ nie ogranicza go jedynie asfalt.
          </p>
          <SelectTypeBtn
            props={typesArr.filter((type) => type.data === "miejski")}
            selectType={() =>
              console.log(bikes.filter((bike) => bike.type.includes("szosa")))
            }
          />
        </div>
      </div>
    </div>
  );
};

export { HomePage };
