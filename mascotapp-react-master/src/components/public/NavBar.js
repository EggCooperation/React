import "../../App.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/Auth.service";
import { AuthContext } from "../../contexts/AuthContext";

export const NavBar = () => {
  
  const { auth, setAuth } = useContext(AuthContext);

  const logout = function () {
    AuthService.clearLocalStorage();
    setAuth(false);
  };

  // setAuth(AuthService.isLogged());

  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to={"/"}
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <img className="App-logo" height="52" src="dog.png" alt="" />
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>

            {auth && (
              <li className="nav-item">
                <Link to={"/dashboard"} className="nav-link">
                  Dashboard
                </Link>
              </li>
            )}

            <li>
              <Link to={"/mascota/form"} className="nav-link">
                Cargar Mascota
              </Link>
            </li>
          </ul>
          <div className="text-end">
            {!auth && (
              <button type="button" className="btn btn-outline-light me-2">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </button>
            )}

            {auth && (
              <button
                type="button"
                className="btn btn-outline-light me-2 "
                onClick={logout}
              >
                <span className="nav-link">Logout</span>
              </button>
            )}

            <button type="button" className="btn btn-warning">
              <Link to={"/sign-up"} className="nav-link">
                Registro
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
