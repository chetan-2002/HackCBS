// import { Route, Routes } from 'react-router-dom';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarHarshit from "./Components/Home/NavbarHarshit";
import Home from "./Pages/Home";
// import Login from './Pages/Login';
// import SignIn from './Pages/SignIn';

function App() {
  return (
    <div className="App">
      <NavbarHarshit />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/about" element={<About />} />
          {/* <Route path="/">
      <Home />
    </Route> */}
        {/* <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />  */}
      </Routes>
    </div>
  );
}

export default App;
