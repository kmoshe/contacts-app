import { call, put, select, takeLatest } from 'redux-saga/effects';
import ApiService from '../../services/apiService';
import { selectContacts, selectMaxCount } from './selectors';
import { actions } from './slice';
import { ApiResponse, Contact } from '../../types/Contact';
import { ContactErrorType } from './types';
import Configuration from '../../configuration';

export function* getContacts() {
    let configuration: Configuration = new Configuration();
    const url: string = configuration.getKey('contactsApiUrl');
    console.log(url);
    const service = new ApiService(url);
    let currentList: Contact[] = yield select(selectContacts);
    let count = currentList.length;
    let max: number = yield select(selectMaxCount);

    while (count < max) {
        try {
            const response: ApiResponse = yield call(service.getContacts);
            if (response.results?.length > 0) {
                yield put(actions.contactsLoaded(response.results));
            } else {
                yield put(
                    actions.contactsLoadingFailure(ContactErrorType.RESPONSE_ERROR),
                );
            }
        } catch (err) {
            console.log(err);
            if (err.response?.status === 404) {
                yield put(actions.contactsLoadingFailure(ContactErrorType.NOT_FOUND));
            } else {
                yield put(
                    actions.contactsLoadingFailure(ContactErrorType.RESPONSE_ERROR),
                );
            }
            break;
        }
        currentList = yield select(selectContacts);
        count = currentList.length;
    }
}

export function* contactListSage() {
    yield takeLatest(actions.loadContacts.type, getContacts);
    yield takeLatest(actions.loadNextContactsBatch.type, getContacts);
}
