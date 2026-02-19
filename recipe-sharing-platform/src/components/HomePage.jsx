import { useEffect,useState } from "react";
import recipesData from "../data.json";

function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Simulate fetching data from an API
        setRecipes(recipesData);
        }, []);

    return (
       <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">
        Recipe Sharing Platform
      </h1>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                {recipe.title}
              </h2>

              <p className="text-gray-600 text-sm mb-4">
                {recipe.summary}
              </p>

              <button className="text-blue-600 font-medium hover:underline">
                View Recipe →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;