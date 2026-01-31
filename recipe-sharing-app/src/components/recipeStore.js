import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  // CRUD actions
  addRecipe: (newRecipe) => {
    const updated = [...get().recipes, newRecipe];
    return set({
      recipes: updated,
      filteredRecipes: applyFilter(updated, get().searchTerm),
    });
  },

  updateRecipe: (updatedRecipe) => {
    const updated = get().recipes.map((r) =>
      r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r
    );
    return set({
      recipes: updated,
      filteredRecipes: applyFilter(updated, get().searchTerm),
    });
  },

  deleteRecipe: (id) => {
    const updated = get().recipes.filter((r) => r.id !== id);
    return set({
      recipes: updated,
      filteredRecipes: applyFilter(updated, get().searchTerm),
      favorites: get().favorites.filter((favId) => favId !== id),
    });
  },

  // Search
  setSearchTerm: (term) => set({
    searchTerm: term,
    filteredRecipes: applyFilter(get().recipes, term),
  }),

  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  // Favorites
  addFavorite: (recipeId) => {
    if (!get().favorites.includes(recipeId)) {
      set({ favorites: [...get().favorites, recipeId] });
    }
  },

  removeFavorite: (recipeId) => {
    set({ favorites: get().favorites.filter((id) => id !== recipeId) });
  },

  // Recommendations
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (r) => !favorites.includes(r.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
}));

const applyFilter = (recipes, term) => {
  if (!term) return recipes;
  return recipes.filter((r) =>
    r.title.toLowerCase().includes(term.toLowerCase())
  );
};
