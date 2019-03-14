import roomsReducer, { INITIAL_STATE } from '../roomsReducer';
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../../actions/types';

describe('Rooms Reducer', () => {
  it('handles action of unknown type', () => {
    const action = { type: 'UNKNOWN' };
    const newState = roomsReducer(INITIAL_STATE, action);

    expect(newState).toEqual(INITIAL_STATE);
  });

  it('handles action of type FETCH_DATA', () => {
    const action = { type: FETCH_DATA };
    const newState = roomsReducer(INITIAL_STATE, action);

    expect(newState).toEqual({ ...INITIAL_STATE, loading: true });
  });

  it('handles action of type FETCH_DATA_SUCCESS', () => {
    const action = {
      type: FETCH_DATA_SUCCESS,
      payload: { a: 'data', b: [1, 2, 3] },
    };
    const newState = roomsReducer(INITIAL_STATE, action);

    expect(newState).toEqual({
      ...INITIAL_STATE,
      rooms: action.payload,
      loading: false,
    });
  });

  it('handles action of type FETCH_DATA_FAILURE', () => {
    const action = {
      type: FETCH_DATA_FAILURE,
      payload: { a: 'data', b: [1, 2, 3] },
    };
    const newState = roomsReducer(INITIAL_STATE, action);

    expect(newState).toEqual({
      ...INITIAL_STATE,
      errorMessage: action.payload,
      loading: false,
    });
  });
});
