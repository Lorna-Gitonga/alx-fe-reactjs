import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  if (!recipes || recipes.length === 0) return <p>No recipes yet.</p>;

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description.substring(0, 50)}...</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
