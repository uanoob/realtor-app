import { createSelector } from 'reselect';

const selectData = state => state.property.data;

const ratingSelector = state => state.property.filters.rating;

const roomSelector = state => state.property.filters.room;

const priceMinSelector = state => state.property.filters.priceMin;

const priceMaxSelector = state => state.property.filters.priceMax;

const currencySelector = state => state.property.filters.currency;

const currencyRateUsd = state => state.currency.usd;

const currencyRateEur = state => state.currency.eur;

const filterByRoom = (item, room) => (room ? item.total_rooms === room : true);

const filterByRating = (item, rating) => (rating ? item.rating === rating : true);

const filterByPriceMin = (item, min) => (min ? item.price > min : true);

const filterByPriceMax = (item, max) => (max ? item.price <= max : true);

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

const filteredSelector = createSelector(
  filteredByCurrencySelector,
  roomSelector,
  ratingSelector,
  priceMinSelector,
  priceMaxSelector,
  (data, room, rating, min, max) => data.filter(
    item => filterByRoom(item, room)
        && filterByRating(item, rating)
        && filterByPriceMin(item, min)
        && filterByPriceMax(item, max),
  ),
);

export default filteredSelector;
