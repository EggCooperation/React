import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { useForm } from "../../../hooks/Custom.hook";
import MascotaService from "../../../services/Pet.service";
import { imageToBase64 } from "../../../utilities/File.utility";
import { useMessageContext } from "./../../../contexts/MessageContext";

const defaultImg = "https://c.tenor.com/xhj_nO3GCQ0AAAAd/so-pretty-dog.gif";

export const PetForm = () => {

  const [img, setState] = useState(defaultImg);
  const { form, setForm, handleChanges } = useForm();
  const { auth } = useContext(AuthContext);
  const { showToast } = useMessageContext();

  const uploadImage = async (e) => {
    if (!!e.target.files[0]) {
      const file = e.target.files[0];
      const base64 = await imageToBase64(file);
      setForm({
        ...form,
        profilePictureB64: base64,
      });
      setState(base64);
    } else {
      setState(defaultImg);
      setForm({
        ...form,
        profilePictureB64: null,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await MascotaService.register(form)
      .then(({ message }) => showToast({ message }))
      .catch((message) => showToast({ message, type: "error" }));
  };

  if (auth) {
    return (
      <div className="mx-auto col-md-9 col-lg-10 m-4">
        <h4 className="mb-3">Carga Mascota</h4>
        <form className="needs-validation" onSubmit={handleSubmit} noValidate>
          <div className="row g-3">
            <div className="col-sm-6">
              <label forhtml="nickName" className="form-label">
                Apodo
              </label>
              <input
                type="text"
                className="form-control"
                id="nickName"
                placeholder=""
                name="nickname"
                onChange={handleChanges}
                required
              />
              <div className="invalid-feedback">Valid Apodo is required.</div>
            </div>

            <div className="col-sm-6">
              <label forhtml="petNumber" className="form-label">
                Numero Mascotuno
              </label>
              <input
                type="text"
                className="form-control"
                id="petNumber"
                placeholder=""
                name="petNumber"
                onChange={handleChanges}
                required
              />
              <div className="invalid-feedback">
                Valid petNumber is required.
              </div>
            </div>

            <div className="col-6">
              <label forhtml="breed" className="form-label">
                Raza
              </label>
              <div className="input-group has-validation">
                <select
                  className="form-select"
                  id="country"
                  name="breed"
                  onChange={handleChanges}
                  required
                >
                  <option value="">Choose...</option>
                  <option value="holy">Holy</option>
                  <option value="fiumba">fiumba</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
            </div>

            <div className="col-6">
              <label forhtml="born" className="form-label">
                Nacimiento
              </label>
              <input
                type="date"
                className="form-control"
                id="petNumber"
                placeholder=""
                // required
              />
              <div className="invalid-feedback">
                Valid petNumber is required.
              </div>
            </div>

            <div className="col-md-6">
              <label forhtml="profilePicture" className="form-label">
                Foto de Perfil
              </label>
              <input
                type="file"
                className="form-control"
                id="petNumber"
                placeholder=""
                onChange={uploadImage}
                // required
              />
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>
            <div className="col-md-6">
              <img
                className="rounded"
                height="300px"
                src={img}
                // src="https://c.tenor.com/xhj_nO3GCQ0AAAAd/so-pretty-dog.gif"
                alt="profile"
              />
            </div>
          </div>

          <hr className="my-4" />

          <button className="w-100 btn btn-primary btn-lg" type="submit">
            Continue to checkout
          </button>
        </form>
      </div>
    );
  } else {
    return <Redirect to={"/login"} />;
  }
};
