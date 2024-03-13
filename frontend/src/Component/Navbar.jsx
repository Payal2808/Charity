import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div className="flex justify-between p-4 bg-slate-300">
      <h1 className="text-lg font-bold">CharityYard</h1>
      <ul className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact Us</Link>
      </ul>
      <div className="flex gap-4">
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
      </div>
    </div>
  );
};

export default NavbarComponent;