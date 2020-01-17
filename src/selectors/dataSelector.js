import { createSelector } from 'reselect';

const selectData = state => state.property.data;

const ratingSelector = state => state.property.filters.rating;

const roomSelector = state => state.property.filters.roomQuantity;

const priceMinSelector = state => state.property.filters.priceMin;

const priceMaxSelector = state => state.property.filters.priceMax;

const filteredByRoomSelector = createSelector(
  selectData,
  roomSelector,
  (data, quantity) => (quantity ? data.filter(item => item.total_rooms === quantity) : data),
);

const filteredByRoomAndRatingSelector = createSelector(
  filteredByRoomSelector,
  ratingSelector,
  (data, rating) => (rating ? data.filter(item => item.rating === rating) : data),
);

const filteredByRoomRatingMinPriceSelector = createSelector(
  filteredByRoomAndRatingSelector,
  priceMinSelector,
  (data, min) => (min ? data.filter(item => item.price > min) : data),
);

const filteredByRoomRatingMinPriceMaxPriceSelector = createSelector(
  filteredByRoomRatingMinPriceSelector,
  priceMaxSelector,
  (data, max) => (max ? data.filter(item => item.price <= max) : data),
);


export default filteredByRoomRatingMinPriceMaxPriceSelector;
