import reducer from './index'
import { ADD_LIST_ITEM } from '../actions/actionTypes'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: null }))
      .toEqual({ items: [] });
  });

  it('should handle ADD_LIST_ITEM', () => {
    const state = { items: [] }
    const action = { type: ADD_LIST_ITEM, item: { key: 'fakeData', label: 'fakeData' } }
    expect(
      reducer(state, action)).
      toEqual({ 'items': [{ 'key': 'fakeData', 'label': 'fakeData' }] });
  });
});
