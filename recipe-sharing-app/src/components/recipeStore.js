import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  addRecipe: (newRecipe) =>
    set((state) => {
      const updated = [...state.recipes, newRecipe];
      return { recipes: updated, filteredRecipes: updated };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r
      );
      return { recipes: updated, filteredRecipes: applyFilter(updated, state.searchTerm) };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      return { recipes: updated, filteredRecipes: applyFilter(updated, state.searchTerm) };
    }),

  setSearchTerm: (term) =>
    set((state) => ({ searchTerm: term, filteredRecipes: applyFilter(state.recipes, term) })),

  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
}));

const applyFilter = (recipes, term) => {
  if (!term) return recipes;
  return recipes.filter((r) => r.title.toLowerCase().includes(term.toLowerCase()));
};
