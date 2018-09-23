import { FETCH_CURRENCY } from '../constants/currency';

export function fetchCurrency() {
  return {
    type: FETCH_CURRENCY,
    callAPI: '/site/chartandheaderdata?currency=BTC,ETH,BCH,LTC,XRP',
  };
}
