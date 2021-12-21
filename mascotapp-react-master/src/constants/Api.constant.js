export const API_RM = {
  URL: "https://rickandmortyapi.com/api",
  CHARACTERS: function () {
    return `${this.URL}/character`;
  },
}

export const API_EGG = {

  URL: "http://localhost:8080/api/v1",

  LOGIN: function () {
    return `${this.URL}/login`;
  },

  USER_REGISTER: function () {
    return `${this.URL}/register`;
  },

  USER_EDIT: function () {
    return `${this.URL}/user/edit`;
  },

  USER_GET_ALL: function () {
    return `${this.URL}/user/list`;
  },

  PET_REGISTER: function () {
    return `${this.URL}/pet/save`;
  },

  PET_GET_ALL: function () {
    return `${this.URL}/pet/list`;
  },

  PET_GET_ALL_ACTIVES: function () {
    return `${this.URL}/pet/list`;//TODO
  },

  PET_GET_SINGLE: function () {
    return `${this.URL}/pet/favorite`;
  },
}