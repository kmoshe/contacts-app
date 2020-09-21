import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../types';
import { initialState } from './slice';

// First select the relevant part from the state
const selectContactListState = (state: RootState) =>
    state.contactList || initialState;

export const selectContacts = createSelector(
    [selectContactListState],
    state => state.contacts,
);

export const selectCurrentCount = createSelector(
    [selectContactListState],
    state => state.current,
);

export const selectLoaded = createSelector(
    [selectContactListState],
    state => state.loaded,
);

export const selectLoading = createSelector(
    [selectContactListState],
    state => state.loading,
);

export const selectMaxCount = createSelector(
    [selectContactListState],
    state => state.max,
);

export const selectError = createSelector(
    [selectContactListState],
    state => state.error,
);
