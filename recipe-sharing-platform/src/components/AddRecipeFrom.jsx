import {    useState} from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {   
    e.preventDefault();

// Basic validation
    const newErrors = {};
      if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim() || ingredients.split(",").length < 2)
      newErrors.ingredients = "At least two ingredients are required, separated by commas";
    if (!instructions.trim() || instructions.split(".").length < 2)
      newErrors.instructions = "Provide at least two preparation steps";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Form submission placeholder
    const newRecipe = {
      id: Date.now(),
      title: title.trim(),
      summary: instructions.split(".")[0] + "...",
      image: "https://via.placeholder.com/400x250", // placeholder
      ingredients: ingredients.split(",").map((i) => i.trim()),
      instructions: instructions.split(".").map((i) => i.trim()).filter(Boolean),
    };

    console.log("New Recipe Submitted:", newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
    alert("Recipe submitted! Check console for output.");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-md p-8 max-w-lg w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.title && <p className="text-red-500 mt-1 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Ingredients (comma-separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows={4}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.ingredients && (
            <p className="text-red-500 mt-1 text-sm">{errors.ingredients}</p>
          )}
        </div>

        {/* Instructions */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Preparation Steps (separate sentences with a dot ".")
          </label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows={6}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.instructions ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.instructions && (
            <p className="text-red-500 mt-1 text-sm">{errors.instructions}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;