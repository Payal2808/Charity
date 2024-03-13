import NavbarComponent from "./Component/Navbar";
import {Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Gallery from "./Component/Gallery";
import Contact from "./Component/Contact";
import Login from "./Component/Auth/Login";
import Signup from "./Component/Auth/Signup";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </div>
  );
}

export default App;
