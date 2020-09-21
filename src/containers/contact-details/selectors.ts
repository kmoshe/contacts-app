import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../types';
import { initialState } from './slice';

// First select the relevant part from the state
const selectContactDetailsState = (state: RootState) =>
    state.contactDetails || initialState;

export const selectContact = createSelector(
    [selectContactDetailsState],
    state => state.contact,
);

export const selectLoading = createSelector(
    [selectContactDetailsState],
    state => state.loading,
);

export const selectLoaded = createSelector(
    [selectContactDetailsState],
    state => state.loaded,
);

export const selectError = createSelector(
    [selectContactDetailsState],
    state => state.error,
);
