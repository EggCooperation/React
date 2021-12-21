import React, { useState } from "react";
import UserService from "../../services/User.service";
import { useForm } from '../../hooks/Custom.hook';
import { useMessageContext } from './../../contexts/MessageContext';

export const UserForm = () => {

  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const { form, handleChanges } = useForm()
  const { showToast } = useMessageContext()

  const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  const validPasswords = () => {
    const { password } = form;
    return password === passwordConfirmation;
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!validPasswords()) return;

    await UserService.register(form)
      .then(({ message }) => showToast({ message, redirect: "/login" }))
      .catch(message => showToast({ message, type: 'error' }))
  };


  return (
    <div className="w-25 mx-auto mt-5">
      <h4 className="mb-3">Humano Registrate!</h4>
      <form className="needs-validation" noValidate>
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
              name="email"
              onChange={handleChanges}
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Clave
            </label>
            <input
              type="password"
              className="form-control"
              id="address"
              placeholder="Clave"
              name="password"
              onChange={handleChanges}
              required
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="password2" className="form-label">
              Repetir Clave
            </label>
            <input
              type="password"
              className="form-control"
              id="password2"
              placeholder="Repetir clave"
              onChange={handlePasswordConfirmation}
            />
          </div>

          <hr className="my-4" />

          <button
            className="w-100 btn btn-primary btn-lg"
            type="submit"
            onClick={handleClick}
          >
            Registrarme
          </button>
        </div>
      </form>
    </div>
  );
};