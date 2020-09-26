import { put, takeLatest } from 'redux-saga/effects';
import { getContacts } from '../../contact-list/saga';
import { actions } from '../slice';
import { getContact } from '../saga'

 describe('SAGAS', () => {
   it('should dispatch action getContact ', () => {
     const generator = getContact({ payload: "155e77ee-ba6d-486f-95ce-0e0c0fb4b919" });
     expect(generator.next().value).toEqual(takeLatest(actions.loadContact.type, getContact));
     expect(generator.next().done).toBeTruthy();
   })
//    it('should dispatch action getContacts with result from API', () => {
//       const mockResponse = { results: [] }; 
//       const generator = getContacts();
//       generator.next();
//       expect(generator.next(mockResponse).value)
//        .toEqual(put({type:"NEWS_RECEIVED", json:"Some content"}))
//       expect(generator.next().done).toBeTruthy();
//    })
})