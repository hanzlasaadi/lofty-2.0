import Home from "./Home/Home";
import Lahore from "./Cities/Lahore";
import Krachi from "./Cities/Krachi";
import Form from "./Home/Form";
import Booking from "./Home/Booking";
import Clinder from "./Home/Clinder";
import LoginSignup from "./nav-bar/auth";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorite from "./Home/Favorite";
import Conformbook from "./Home/Conformbook";
import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="Lahore" element={<Lahore />} />
        <Route
          path="Karachi"
          element={
            <Krachi isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="Form" element={<Form />} />
        <Route
          path="Booking/:roomId"
          element={
            <Booking isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="Clinder" element={<Clinder />} />
        <Route
          path="login"
          element={
            <LoginSignup
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route path="Favorite" element={<Favorite />} />

        <Route path="Conformbook" element={<Conformbook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
