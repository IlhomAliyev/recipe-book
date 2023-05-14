import { IRecipeData } from '../../types/recipe.types';
import { api } from './api';

export const recipeAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    createRecipe: builder.mutation<null, IRecipeData>({
      query: (recipe) => ({
        body: recipe,
        url: '/',
        method: 'POST',
      }),
      invalidatesTags: () => [{ type: 'Recipe' }],
    }),
  }),
});

export const { useCreateRecipeMutation } = recipeAPI;
