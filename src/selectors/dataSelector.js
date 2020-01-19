import { createSelector } from 'reselect';

const selectData = state => state.property.data;

const ratingSelector = state => state.property.filters.rating;

const roomSelector = state => state.property.filters.roomQuantity;

const priceMinSelector = state => state.property.filters.priceMin;

const priceMaxSelector = state => state.property.filters.priceMax;

const currencySelector = state => state.property.filters.currency;

const currencyRateUsd = state => state.currency.usd;

const currencyRateEur = state => state.currency.eur;

export const getCurrencyRate = (name, usd, eur) => {
  switch (name) {
    case 'uah':
      return 1;
    case 'usd':
      return usd;
    case 'eur':
      return eur;
    default:
      return 1;
  }
};

const filteredByCurrencySelector = createSelector(
  selectData,
  currencySelector,
  currencyRateUsd,
  currencyRateEur,
  (data, sign, usd, eur) => data.map(item => ({
    ...item,
    price: Math.floor(item.price / getCurrencyRate(sign, usd, eur)),
  })),
);

const filteredByCurrencyRoomSelector = createSelector(
  filteredByCurrencySelector,
  roomSelector,
  (data, quantity) => (quantity ? data.filter(item => item.total_rooms === quantity) : data),
);

const filteredByCurrencyRoomAndRatingSelector = createSelector(
  filteredByCurrencyRoomSelector,
  ratingSelector,
  (data, rating) => (rating ? data.filter(item => item.rating === rating) : data),
);

const filteredByCurrencyRoomRatingMinPriceSelector = createSelector(
  filteredByCurrencyRoomAndRatingSelector,
  priceMinSelector,
  (data, min) => (min ? data.filter(item => item.price > min) : data),
);

const filteredByCurrencyRoomRatingMinPriceMaxPriceSelector = createSelector(
  filteredByCurrencyRoomRatingMinPriceSelector,
  priceMaxSelector,
  (data, max) => (max ? data.filter(item => item.price <= max) : data),
);

export default filteredByCurrencyRoomRatingMinPriceMaxPriceSelector;
