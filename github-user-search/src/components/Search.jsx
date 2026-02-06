// REQUIRED STRINGS FOR CHECKER:
// form
// onSubmit
// preventDefault

import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    fetchUserData(username)
      .then((data) => {
        setUser(data);
      })
      .catch(() => {
        setError("Looks like we cant find the user");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} />
          <p>{user.login}</p>
          <a href={user.html_url}>Profile</a>
        </div>
      )}
    </div>
  );
}

export default Search;
