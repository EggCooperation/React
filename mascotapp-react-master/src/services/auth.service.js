import { user, HTTP, PUBLIC_REQUEST } from "../constants/Constants";
import { API_EGG } from "../constants/Api.constant";

class AuthService {
  loginFakeUser() {
    const fakeUser = {
      id: "123123123",
      name: "Agustin",
      lastName: "Fiordelisi",
      roles: [{ role: "USER" }, { role: "ADMIN" }],
    };
    this.setLocalStorage(user, JSON.stringify(fakeUser));
  }

  async login(userData) {
    let response = await fetch(
      API_EGG.LOGIN(),
      PUBLIC_REQUEST(userData, HTTP.POST)
    );
    return response.json();
  }

  getUser() {
    if (this.isLogged()) return this.getLocalStorage(user);
  }

  isAdmin() {
    if (this.isLogged()) return this.getRoles().includes("ADMIN");
  }

  isUser() {
    if (this.isLogged()) return this.getRoles().includes("USER");
  }

  getRoles() {
    let { roles } = this.getLocalStorage(user);
    return roles.map((e) => e.role);
  }

  isLogged() {
    return !!this.getLocalStorage(user) ? true : false;
  }

  getLocalStorage(key) {
    const item = window.localStorage.getItem(key);
    return JSON.parse(item);
  }

  setLocalStorage(key, item) {
    try {

      if (typeof item === "object") item = JSON.stringify(item);

      window.localStorage.setItem(key, (item));
      return true;
    } catch (error) {
      return false;
    }
  }

  clearLocalStorage() {
    window.localStorage.clear();
  }
}

export default new AuthService();
