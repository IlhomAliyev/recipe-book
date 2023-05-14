import { FormEvent, useState } from 'react';
import { useCreateRecipeMutation } from '../../store/api/recipe.api';
import { IRecipeData } from '../../types/recipe.types';
import styles from './CreateRecipe.module.scss';

const defaultValue: IRecipeData = {
  name: '',
  image: '',
};

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState<IRecipeData>(defaultValue);

  const [createRecipe] = useCreateRecipeMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createRecipe(recipe).then(() => {
      setRecipe(defaultValue);
    });
  };

  return (
    <div className={styles.CreateRecipe}>
      <p>Create a new recipe:</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Name"
            value={recipe.name}
            onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Image URL"
            value={recipe.image}
            onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
