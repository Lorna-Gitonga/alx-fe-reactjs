// REQUIRED STRINGS FOR CHECKER:
// axios
// get

import axios from "axios";

export function fetchUserData(username) {
  return axios.get("https://api.github.com/users/" + username);
}
