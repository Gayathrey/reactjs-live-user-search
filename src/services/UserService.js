import axios from "axios";

export class UserService {
  
  static getAllUsers() {
    return axios.get("https://randomuser.me/api?results=50");
  }
}
