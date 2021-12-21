import { useState } from "react";
import AuthService from "../services/Auth.service";

export const useForm = (initialState = {}) => {
  const [form, setForm] = useState(initialState);

  const handleChanges = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return {
    form,
    setForm,
    handleChanges,
  };
};

export const useAuth = () => {
  const [auth, setAuth] = useState(AuthService.isLogged());
  const [roles, setRoles] = useState([]);

  return [auth, setAuth, roles, setRoles];
};
