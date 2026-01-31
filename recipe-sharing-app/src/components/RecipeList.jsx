import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const { filteredRecipes, favorites, addFavorite, removeFavorite } = useRecipeStore((state) => ({
    filteredRecipes: state.filteredRecipes || [],
    favorites: state.favorites,
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite,
  }));

  if (filteredRecipes.length === 0) return <p>No recipes found.</p>;

  return (
    <div>
      {filteredRecipes.map((recipe) => {
        if (!recipe?.id) return null;
        const isFav = favorites.includes(recipe.id);
        return (
          <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description.substring(0, 50)}...</p>
            </Link>
            <button
              onClick={() => (isFav ? removeFavorite(recipe.id) : addFavorite(recipe.id))}
              style={{ marginTop: '5px', background: isFav ? 'red' : 'green', color: 'white' }}
            >
              {isFav ? 'Remove Favorite' : 'Add Favorite'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
