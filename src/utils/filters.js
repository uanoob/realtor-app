import qs from 'query-string';

export const pushToUrl = (history, filters, name, value) => {
  const query = qs.stringify({ ...filters, [name]: value }, { skipNull: true });
  history.push({ pathname: history.location.pathname, search: query });
};

export const parsedQuery = history => qs.parse(history.location.search, { parseNumbers: true });

export const getRoomById = id => {
  switch (id) {
    case 'SHOW_ROOMS_ONE':
      return 1;
    case 'SHOW_ROOMS_TWO':
      return 2;
    case 'SHOW_ROOMS_THREE':
      return 3;
    default:
      return 0;
  }
};

export const getRatingById = id => {
  switch (id) {
    case 'RATING_ONE':
      return 1;
    case 'RATING_TWO':
      return 2;
    case 'RATING_THREE':
      return 3;
    case 'RATING_FOUR':
      return 4;
    case 'RATING_FIVE':
      return 5;
    default:
      return 0;
  }
};

export const getSelectionByName = name => {
  switch (name) {
    case 'priceMin':
      return 'Цена от:';
    case 'priceMax':
      return 'Цена до:';
    case 'rating':
      return 'Рейтинг:';
    case 'room':
      return 'Комнаты:';
    default:
      return '';
  }
};
