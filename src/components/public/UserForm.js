import React, { useState, useEffect } from "react";
import { useUserForm } from "../../hooks/Custom.hook";

export const UserForm = () => {
  const { form, handleChanges } = useUserForm();

  const [areEquals, setareEquals] = useState(true); // se va a encargar de ver si las contraseñas son iguales

  const [passwordConfirmation, setpasswordConfirmation] = useState(); //se encarga de atrapar la unica clave que vamos a mandar

  const [pass, setPass] = useState(true)


  
  const validPass = () => { //comprueba que la password no este indefinida
    const { password } = form;  
    if (password !== undefined) {
    setPass(false)
  } 
  return pass
  }

  const handlePasswordConfirmation = (e) => {
    //la e hace refencia al input de donde se ejecuta la funcion
    setpasswordConfirmation(e.target.value); //aca vemos el valor de ese input
  };

  useEffect(() => {
    const { password } = form; //hago un destructuring de form, es decir, saco lo que me interesa de form, en este caso password, que es el name del input de contraseña
    setareEquals(password === passwordConfirmation);
    validPass()
  }, [passwordConfirmation, pass]);

  const handleSubmit = (e) => {
    // se va a encargar de atrapar el envio del formulario
    e.preventDefault();
    console.log(form);
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
              name="password" //con esto se va a ir generando el json que mandamos a la api porq asi lo armamos en el hook
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
              // no le ponemos name porque no nos interesa mandarla a la api, la contraseña se manda del primer input
              type="password"
              className="form-control"
              id="password2"
              placeholder="Repetir clave"
              onChange={handlePasswordConfirmation}
            />
            { !areEquals && (
              <div className="form-text list-group-item-danger">
                Las claves no son iguales
              </div>
            )}
          </div>
          <button
            disabled={!areEquals || pass}
            className="w-100 btn btn-primary btn-lg"
            type="submit"
            onClick={handleSubmit}
          >
            Registrarme
          </button>
        </div>
      </form>
    </div>
  );
};
