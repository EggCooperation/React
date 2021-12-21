import { API_RM } from "../constants/Api.constant";
import { httpReq } from "./Interceptor.service";

class RickAndMortyService {
  async getAllCharacters() {
    const response = await fetch(API_RM.CHARACTERS());
    return httpReq(response)
  }

  async getCharacterById(id) {
    const response = await fetch(`${API_RM.CHARACTERS()}/${id}`);
    return response.json();
  }


}

export default new RickAndMortyService();
