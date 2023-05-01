import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { myContext } from "../../Providers/Providers";

const Header = () => {
  const handleLogOut = () => {
    logedOut()
      .then(() => {
        // Sign-out successful.
        setUser(null);
      })

      .catch(error => {
        // An error happened.
      });
  };
  const { user, logedOut, setUser } = useContext(myContext);
  console.log(user);
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        {user && (
          <button onClick={handleLogOut} className="btn btn-sm ml-3">
            Log Out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
