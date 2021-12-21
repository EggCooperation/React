import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/Auth.service";

export const SideBar = () => {

  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    setIsAdmin(AuthService.isAdmin());
    setUser(AuthService.getUser());
  }, [])

  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse"
    >
      <div className="position-sticky pt-3">
        {isAdmin && (
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to={"/dashboard/tabla-mascotas"} className="nav-link">
                Todas las Mascotas{" "}
                <i className="fa fa-table" aria-hidden="true"></i>{" "}
                <i className="fa fa-paw" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/dashboard/tabla-usuarios"} className="nav-link">
                Todos los Usuarios{" "}
                <i className="fa fa-table" aria-hidden="true"></i>{" "}
                <i className="fa fa-user" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        )}
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>
            <img
              className="rounded"
              height="50px"
              src="https://c.tenor.com/xhj_nO3GCQ0AAAAd/so-pretty-dog.gif"
              alt="profile"
            />
            {"  "}
            {user.name} {user.lastName}
          </span>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <Link to={"/dashboard/perfil"} className="nav-link">
              Mi Perfil <i className="fa fa-cog" aria-hidden="true"></i>
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/dashboard/lista"} className="nav-link">
              Mis Mascotas <i className="fas fa-list"></i>{" "}
              <i className="fa fa-paw" aria-hidden="true"></i>
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/dashboard/fav"} className="nav-link">
              Mi Mascota Favorita{" "}
              <i className="fa fa-heart" aria-hidden="true"></i>{" "}
              <i className="fa fa-paw" aria-hidden="true"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
