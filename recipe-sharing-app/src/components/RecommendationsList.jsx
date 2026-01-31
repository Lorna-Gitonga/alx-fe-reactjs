import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const { recommendations, addFavorite } = useRecipeStore((state) => ({
    recommendations: (state.recommendations || []).filter(Boolean),
    addFavorite: state.addFavorite,
  }));

  if (recommendations.length === 0) return <p>No recommendations yet.</p>;

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Recommended for You</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button
            onClick={() => addFavorite(recipe.id)}
            style={{ background: 'green', color: 'white', marginTop: '5px' }}
          >
            Add to Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
