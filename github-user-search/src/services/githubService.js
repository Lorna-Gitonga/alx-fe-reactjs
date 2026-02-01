export async function fetchUserData(
  { username, location, minRepos },
  page = 1
) {
  let query = "";

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const response = await fetch(
    `https://api.github.com/search/users?q=${encodeURIComponent(
      query
    )}&page=${page}&per_page=6`
  );

  if (!response.ok) {
    throw new Error("Search failed");
  }

  return response.json();
}
