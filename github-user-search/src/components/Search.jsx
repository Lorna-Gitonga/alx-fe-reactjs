import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    const data = await fetchUserData({
      username: query,
    });
    setUsers(data.items);
  };

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GitHub users"
      />
      <button onClick={handleSearch}>Search</button>

      {users.map((user) => (
        <p key={user.id}>{user.login}</p>
      ))}
    </div>
  );
}

export default Search;
