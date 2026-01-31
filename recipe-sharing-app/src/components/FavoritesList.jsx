import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const { favorites, recipes, removeFavorite } = useRecipeStore((state) => ({
    favorites: state.favorites,
    recipes: state.recipes,
    removeFavorite: state.removeFavorite,
  }));

  const favoriteRecipes = favorites
    .map((id) => recipes.find((r) => r && r.id === id))
    .filter(Boolean);

  if (favoriteRecipes.length === 0) return <p>No favorites yet.</p>;

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>My Favorites</h2>
      {favoriteRecipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button
            onClick={() => removeFavorite(recipe.id)}
            style={{ background: 'red', color: 'white', marginTop: '5px' }}
          >
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
