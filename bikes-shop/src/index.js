import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./routes/homePage";
import { BikesPage } from "./routes/bikesPage";
import { ShowBikes } from "./routes/displayBikes";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />}></Route>
          <Route path="bikes" element={<BikesPage />}>
            <Route path=":bikesID" element={<ShowBikes />} />{" "}
          </Route>
          <Route
            path="*"
            element={
              <div>
                <p>Coś poszło nie tak... </p>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
