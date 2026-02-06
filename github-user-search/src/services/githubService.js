import axios from "axios";

/* BASIC SEARCH  */
export const fetchUserData = async (username) => {
  const response = await axios.get(
    "https://api.github.com/users/" + username
  );
  return response.data;
};

/* ADVANCED SEARCH */
export const fetchAdvancedUsers = async (
  username,
  location,
  minRepos,
  page = 1
) => {
  let query = username || "";

  if (location) {
    query += ` location:${location}`;
  }

  if (minRepos) {
    query += ` repos:>=${minRepos}`;
  }

  const response = await axios.get(
    "https://api.github.com/search/users",
    {
      params: {
        q: query,
        page,
        per_page: 5,
      },
    }
  );

  return response.data;
};
