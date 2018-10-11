const getShowRooms = (cards, value) => {
  switch (value) {
    case 'SHOW_ROOMS_ALL':
      return cards;
    case 'SHOW_ROOMS_ONE':
      return cards.filter(card => card.total_rooms === 1);
    case 'SHOW_ROOMS_TWO':
      return cards.filter(card => card.total_rooms === 2);
    case 'SHOW_ROOMS_THREE':
      return cards.filter(card => card.total_rooms === 3);
    default:
      return cards;
  }
};

const showPriceMax = (cards, value) => {
  if (value !== '') {
    return cards.filter(card => card.price <= value);
  }
  return cards;
};

const showPriceMin = (cards, value) => {
  if (value !== '') {
    return cards.filter(card => card.price > value);
  }
  return cards;
};

const filterRating = (cards, value) => {
  switch (value) {
    case 'RATING_ONE':
      return cards.filter(card => card.rating === 1);
    case 'RATING_TWO':
      return cards.filter(card => card.rating === 2);
    case 'RATING_THREE':
      return cards.filter(card => card.rating === 3);
    case 'RATING_FOUR':
      return cards.filter(card => card.rating === 4);
    case 'RATING_FIVE':
      return cards.filter(card => card.rating === 5);
    default:
      return cards;
  }
};

const getFiltersCards = (cards, filter, value) => {
  switch (filter) {
    case 'FILTER_ROOMS':
      return getShowRooms(cards, value);
    case 'FILTER_RATING':
      return filterRating(cards, value);
    case 'FILTER_PRICE_MAX':
      return showPriceMax(cards, value);
    case 'FILTER_PRICE_MIN':
      return showPriceMin(cards, value);
    default:
      return cards;
  }
};

export default getFiltersCards;
