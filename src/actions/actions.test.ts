import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import { addListItem } from './index';
import { ADD_LIST_ITEM } from './actionTypes';
import { IItem } from '../types'

const mockStore = configureMockStore();
const store = mockStore({});

describe('List actions', () => {

  beforeEach(() => {
    store.clearActions();
  });

  it('creates ADD_LIST_ITEM when add list action is successful', (done) => {

    const listItem: IItem = { key: 'fakeData', label: 'fakeData' };
    const expectedActions = {
      type: ADD_LIST_ITEM,
      item: { key: 'fakeData', label: 'fakeData' },
    };

    const createdAction = addListItem(listItem);

    expect(createdAction).toEqual(expectedActions);
    done();
  });

  it('dispatch ADD_LIST_ITEM', (done) => {

    const listItem: IItem = { key: 'fakeData', label: 'fakeData' };
    const expectedAction = [{
      type: ADD_LIST_ITEM,
      item: listItem,
    }];

    store.dispatch(addListItem(listItem));
    const storeActions = store.getActions();

    expect(storeActions).toEqual(expectedAction);

    done();
  });
});

