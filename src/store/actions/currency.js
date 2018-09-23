import { FETCH_CURRENCY, CHANGE_SELECTED_CURRENCY } from '../constants/currency';

export function fetchCurrency() {
  return {
    type: FETCH_CURRENCY,
    callAPI: '/site/chartandheaderdata?currency=BTC,ETH,BCH,LTC,XRP',
  };
}

export const changeSelected = selected => ({
  type: CHANGE_SELECTED_CURRENCY,
  payload: selected
});
