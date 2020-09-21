import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../utils/@reduxjs/toolkit';
import { ContainerState, ContactErrorType } from './types';
import { Contact } from '../../types/Contact';

export const initialState: ContainerState = {
    contact: null,
    loading: false,
    loaded: false,
    error: null,
};

const contactDetilsSlice = createSlice({
    name: 'contactDetails',
    initialState,
    reducers: {
        loadContact(state, action: PayloadAction<string>) {
            state.contact = null;
            state.loading = true;
            state.loaded = false;
        },
        contactLoaded(state, action: PayloadAction<Contact>) {
            const contact = action.payload;
            state.contact = contact;
            state.loaded = true;
            state.loading = false;
        },
        contactsLoadingFailure(state, action: PayloadAction<ContactErrorType>) {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const { actions, reducer, name: sliceKey } = contactDetilsSlice;
