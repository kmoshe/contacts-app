import { Contact } from '../../types/Contact';

export interface ContactDetailsState {
    contact: Contact | null;
    loading: boolean;
    loaded: boolean;
    error?: ContactErrorType | null;
}

export enum ContactErrorType {
    RESPONSE_ERROR = 1,
    RESPONSE_INCOMPLETE = 2,
    NOT_FOUND = 3,
}

export type ContainerState = ContactDetailsState;
