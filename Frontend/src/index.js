import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import DashBoard from "./Pages/DashBoard";
import FindOrWant from "./Pages/FindOrWant";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import ShelterProfile from "./Pages/ShelterProfile";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { Register } from "./Pages/Register";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/Home" element={<Home />}></Route>
        <Route exact path="/Shelter/Profile" element={<Profile />}></Route>
        <Route
          exact
          path="/ShelterProfile"
          element={<ShelterProfile />}
        ></Route>
        <Route exact path="/FindOrWant" element={<FindOrWant />}></Route>
        <Route exact path="/dashboard" element={<DashBoard />}></Route>
        <Route exact path='/register' element={<Register/>}></Route>
      </Routes>
    </Auth0ProviderWithHistory>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
