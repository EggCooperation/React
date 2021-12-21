export const HOME = ["/", "/home"];
export const USERS = "/users";
export const LOGIN = "/login";
export const SIGNUP = "/sign-up";

export const MASCOTAS = {
  ROOT: "/mascota",
  DETALLE: function () {
    return `${this.ROOT}/detalle/:id`;
  },
  FORM: function () {
    return `${this.ROOT}/form`;
  },
};

export const DASHBOARD = {
  ROOT: "/dashboard",
  TABLA_MASCOTAS: function () {
    return `${this.ROOT}/tabla-mascotas`;
  },
  TABLA_USUARIOS: function () {
    return `${this.ROOT}/tabla-usuarios`;
  },
  LISTA: function () {
    return [`${this.ROOT}/lista`, this.ROOT];
  },
  PERFIL: function () {
    return `${this.ROOT}/perfil`;
  },
  FAV: function () {
    return `${this.ROOT}/fav/:id`;
  },
};
