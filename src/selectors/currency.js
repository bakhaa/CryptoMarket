import * as R from 'ramda';
import { createSelector } from 'reselect';

const currencySelector = state => state.currency;

export const getLoading = createSelector(
  currencySelector,
  currency => currency.get('loading'),
);

export const getLoaded = createSelector(
  currencySelector,
  currency => currency.get('loaded'),
);

export const getCurrencyList = createSelector(
  currencySelector,
  currency => R.values(currency.get('list').toJS())
);
