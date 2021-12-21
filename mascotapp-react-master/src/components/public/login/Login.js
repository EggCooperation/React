import "./Login.css";

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import AuthService from "../../../services/Auth.service";

export const Login = (props) => {

  const { setAuth } = useContext(AuthContext);
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = ({ target }) => {
    setUser((prevProps) => ({
      ...prevProps,
      [target.name]: target.value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthService.login(user)
      .then((response) => {
        AuthService.setLocalStorage("user", response.data.token.user);
        setAuth(true);
        props.history.push("/dashboard");
      });
  }

  // const fakeLogin = function (e) {
  //   e.preventDefault();
  //   AuthService.loginFakeUser();
  //   setAuth(!auth);
  // };

  return (
    <div className="text-center">
      <main className="form-signin">
        <form onSubmit={handleSubmit}>
          <i className="fa fa-address-card-o fa-3x mb-4" aria-hidden="true"></i>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              required
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Recordarme
            </label>
            <Link to={"/sign-up"} className="m-5">
              Registro
            </Link>
          </div>
          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
};
