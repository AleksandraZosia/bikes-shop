import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./routes/homePage";
import { BikesPage } from "./routes/bikesPage";
// import HomePage from "./routes/homePage.js";
//import { BikesPage } from "./routes/bikesPage.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<HomePage />}>
            <Route path="bikes" element={<BikesPage />} />
          </Route>
          <Route path="bikes" element={<BikesPage />} />
          <Route
            pat="*"
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
