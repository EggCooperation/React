import "./App.css";
import React from "react";
import { AuthContext } from "./contexts/AuthContext";
import { useAuth } from "./hooks/Custom.hook";
import { Switch, Route } from "react-router-dom";
import { Footer } from "./components/public/Footer";
import { NavBar } from "./components/public/NavBar";
import Main from "./components/public/Main";
import { Login } from "./components/public/login/Login";
import { UserForm } from "./components/public/UserForm";
import { Dashboard } from "./components/secured/Dashboard";
import { PetForm } from "./components/secured/pets/PetForm";
import { Detail } from "./components/public/Detail";
import {
  DASHBOARD,
  HOME,
  LOGIN,
  MASCOTAS,
  SIGNUP,
} from "./constants/App.constant";

export const App = () => {
  const [auth, setAuth, roles, setRoles] = useAuth();

  return (
    <div className="">
      <AuthContext.Provider value={{ auth, setAuth, roles, setRoles }}>
        <NavBar />

        <Switch>
          <Route exact path={HOME} component={Main} />
          <Route path={DASHBOARD.ROOT} component={Dashboard} />
          <Route path={LOGIN} component={Login} />
          <Route path={SIGNUP} component={UserForm} />
          <Route path={MASCOTAS.DETALLE()} component={Detail} />
          <Route path={MASCOTAS.FORM()} component={PetForm} />
        </Switch>
      </AuthContext.Provider>

      <Footer />
    </div>
  );
};
