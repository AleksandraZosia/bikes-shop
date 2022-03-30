import ExampleBike from "./img/bike-1.svg";
import FirstBikeImg from "./img/bike-2.svg";
import SecondBikeImg from "./img/bike-3.svg";
import ThirdBikeImg from "./img/bike-4.svg";

// with logic to show ALL bikes- the same as bikes from nav

const AllBikes = function ({ props }) {
  return (
    <button>
      <p>{props}</p>
      Pokaż rowery!
    </button>
  );
};

// filtered to only show szosa
const FirstBike = ({ props }) => {
  return (
    <button>
      <p>{props}</p>
      Szosa
    </button>
  );
};

// filtered to only show góral
const SecondBike = ({ props }) => {
  return (
    <button>
      <p>{props}</p>
      Góral
    </button>
  );
};
// filtered to only show miejski

const ThirdBike = ({ props }) => {
  return (
    <button>
      <p>{props}</p>
      Miejski
    </button>
  );
};

const bikeButtons = { AllBikes, FirstBike, SecondBike, ThirdBike };

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="introduction">
        <div>
          <h1>Wybierz się na Mazury</h1>

          <p>
            Mazury to ultralekkie rowery tworzone z pasją w niewielkiej
            manufakturze w Szczytnie. Świetnie sprawdzą się zarówno na leśnej
            drodze, jak i w miejskiej dżungli.
          </p>
          <AllBikes />
        </div>
        <img src={ExampleBike} alt="Rysunkowy rower" />
      </div>
      <h2>Jaki model jest idealny dla Ciebie?</h2>
      <div className="content">
        <div className="first-bike">
          <p>
            <strong>Szosa</strong>
          </p>
          <p>
            To rower dla miłośników prędkości i gładkich, asfaltowych tras.
            Świetnie sprawdzi się również w mieście. Jest szybki i ultralekki.
            Waży już od 7,8kg!
          </p>

          <FirstBike />
        </div>
        <div>
          {" "}
          <img src={FirstBikeImg} alt="Rower typu szosa" />
        </div>

        <div className="second-bike">
          <p>
            <strong>Góral</strong>
          </p>
          <p>
            Pogromca w dzikim terenie. Rower na misje specjalne. Pozwala skakać
            przez przeszkody w lesie, jak i pojedzie po piaszczystej plaży. W
            razie potrzeby możesz na nim pokonać także górski strumień. Nigdy
            Cię nie zawiedzie.
          </p>
          <SecondBike />
        </div>
        <div>
          <img src={SecondBikeImg} alt="Rower typu góral" />
        </div>

        <div className="third-bike">
          <p>
            <strong>Miejski</strong>
          </p>
          <p>
            Wygodny jak fotel uszatek, pozwala na jazdę po mieście w luksusowych
            warunkach. Dojedziesz nim do pracy, na uczelnię, ale także na piknik
            pod miastem, ponieważ nie ogranicza go jedynie asfalt.
          </p>
          <ThirdBike />
        </div>
        <img src={ThirdBikeImg} alt="Rower typu miejskiego" />
      </div>
    </div>
  );
};

export { HomePage };
