import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { actions as favoriteActions } from '../store/favorites/favorites.slice';
import * as userActions from '../store/user/user.actions';

const rootActions = {
  ...favoriteActions,
  ...userActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
