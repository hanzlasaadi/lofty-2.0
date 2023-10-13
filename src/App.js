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
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Lahore" element={<Lahore />} />
        <Route path="Karachi" element={<Krachi />} />
        <Route path="Form" element={<Form />} />
        <Route path="Booking/:roomId" element={<Booking />} />
        <Route path="Clinder" element={<Clinder />} />
        <Route path="login" element={<LoginSignup />} />
        <Route path="Favorite" element={<Favorite />} />

        <Route path="Conformbook" element={<Conformbook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
