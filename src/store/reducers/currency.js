import { fromJS } from 'immutable';
// constants
import { REQUEST, SUCCESS, FAILURE } from '../constants';
import { FETCH_CURRENCY } from '../constants/currency';

const initialState = fromJS({
  loading: false,
  loaded: false,
  selectedCurrency: 'USD',
  list: {},
});

export default function main(state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENCY + REQUEST: {
      return state
        .set('loading', true);
    }
    case FETCH_CURRENCY + SUCCESS: {
      return state
        .set('loading', false)
        .set('loaded', true)
        .set('list', fromJS(action.payload));
    }
    case FETCH_CURRENCY + FAILURE: {
      return state
        .set('loading', false)
        .set('list', fromJS({}));
    }
    default:
      return state;
  }
}
