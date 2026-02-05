import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    addRecipe({
      id: Date.now(),
      title: title,
      description: description,
    });

    setTitle('');
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
