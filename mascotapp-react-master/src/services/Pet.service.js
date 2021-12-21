import { API_EGG } from "../constants/Api.constant";
import { HTTP, PUBLIC_REQUEST, TOKEN_REQUEST } from "../constants/Constants";
import { httpReq } from "./Interceptor.service";

class PetService {

  async registerPet(petData) {
    const response = await fetch(API_EGG.PET_REGISTER(), TOKEN_REQUEST(HTTP.POST, petData));
    return httpReq(response)
  }

  async getAllPets() {
    const response = await fetch(API_EGG.PET_GET_ALL(), TOKEN_REQUEST(HTTP.GET));
    return response.json();
  }

  async getAllPetsActive() {
    const response = await fetch(API_EGG.PET_GET_ALL_ACTIVES(), PUBLIC_REQUEST(HTTP.GET));
    return response.json();
  }

  async getPetsByUser(userId) {
    const response = await fetch(`${API_EGG.PET_GET_ALL()}/${userId}`, TOKEN_REQUEST(HTTP.GET));
    return response.json();
  }

  async getFavoritePet(userId) {
    const response = await fetch(`${API_EGG.PET_GET_SINGLE()}/${userId}`, TOKEN_REQUEST(HTTP.GET));
    return response.json();
  }

}

export default new PetService();