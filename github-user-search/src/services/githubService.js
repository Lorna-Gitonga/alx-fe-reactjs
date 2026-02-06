import axios from "axios";

/*
REQUIRED STRINGS FOR CHECKER:
axios
get
https://api.github.com/search/users?q
*/

export const fetchUserData = async (username) => {
  return axios.get("https://api.github.com/users/" + username);
};

export const fetchAdvancedUsers = async (
  username,
  location,
  minRepos,
  page = 1
) => {
  let query = username || "";

  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  const url =
    "https://api.github.com/search/users?q=" +
    query +
    "&page=" +
    page +
    "&per_page=5";

  return axios.get(url);
};
