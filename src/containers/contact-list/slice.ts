import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../utils/@reduxjs/toolkit';
import { ContainerState, ContactErrorType } from './types';
import { Contact } from '../../types/Contact';

export const initialState: ContainerState = {
    contacts: [],
    loading: false,
    loaded: false,
    max: 0,
    current: 0,
    error: null,
};

const contactListSlice = createSlice({
    name: 'contactList',
    initialState,
    reducers: {
        loadContacts(state, action: PayloadAction<number>) {
            const max = action.payload;
            state.contacts = [];
            state.loading = true;
            state.loaded = false;
            state.max = max;
        },
        loadNextContactsBatch(state) {
            state.loading = true;
            state.loaded = false;
        },
        contactsLoadedPartially(state, action: PayloadAction<Contact[]>) {
            const contacts = action.payload;
            state.contacts = [...state.contacts, ...contacts];
            state.loaded = true;
            state.loading = false;
        },
        contactsLoaded(state, action: PayloadAction<Contact[]>) {
            const contacts = action.payload;
            state.contacts = [...state.contacts, ...contacts];
            state.loaded = true;
            state.loading = false;
        },
        contactsLoadingFailure(state, action: PayloadAction<ContactErrorType>) {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const { actions, reducer, name: sliceKey } = contactListSlice;
