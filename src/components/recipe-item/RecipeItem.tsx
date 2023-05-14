import React from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import styles from './RecipeItem.module.scss';
import { IRecipe } from '../../types/recipe.types';
import { useFavorites } from '../../hooks/useFavorites';

interface IReceipItem {
  recipe: IRecipe;
}

const RecipeItem = ({ recipe }: IReceipItem) => {
  const { favorites } = useFavorites();
  const { toggleFavorites } = useActions();

  const isExists = favorites.some((r) => r.id === recipe.id);

  return (
    <div className={styles.RecipeItem}>
      <img src={recipe.image} alt={recipe.name} />
      <h3>
        {recipe.id}. {recipe.name} {isExists && '⭐️'}
      </h3>
      <button onClick={() => toggleFavorites(recipe)}>
        {isExists ? 'Remove to' : 'Add to'} favorites
      </button>
    </div>
  );
};

export default RecipeItem;
