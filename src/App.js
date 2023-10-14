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
<<<<<<< HEAD
import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
=======
import { useEffect, useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    let checkToken = localStorage.getItem("token");
    if (checkToken) {
      setIsLoggedIn(true);
      console.log("token is present: ", checkToken);
      setAuthToken(checkToken);
    } else if (
      checkToken === "" ||
      !checkToken ||
      checkToken === undefined ||
      checkToken === null
    ) {
      setIsLoggedIn(false);
      console.log("token not present: ", checkToken);
      setAuthToken(null);
    }
  }, [setIsLoggedIn]);

>>>>>>> 1ec2750924e323d6ee6da6970d199862f7b6d38a
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
<<<<<<< HEAD
        <Route path="Clinder/:roomId" element={<Clinder />} />
=======
        <Route
          path="Clinder/:roomId"
          element={
            <Clinder isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
>>>>>>> 1ec2750924e323d6ee6da6970d199862f7b6d38a
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

<<<<<<< HEAD
        <Route path="Conformbook/:roomId" element={<Conformbook />} />
=======
        <Route
          path="Conformbook/:roomId"
          element={
            <Conformbook
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
>>>>>>> 1ec2750924e323d6ee6da6970d199862f7b6d38a
      </Routes>
    </BrowserRouter>
  );
}

export default App;
