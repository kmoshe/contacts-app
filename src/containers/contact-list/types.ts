import { Contact } from '../../types/Contact';

export interface ContactListState {
    contacts: Contact[];
    loading: boolean;
    loaded: boolean;
    current: number;
    max: number;
    error?: ContactErrorType | null;
}

export enum ContactErrorType {
    RESPONSE_ERROR = 1,
    RESPONSE_INCOMPLETE = 2,
    NOT_FOUND = 3,
}

export type ContainerState = ContactListState;