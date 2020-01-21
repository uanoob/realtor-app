import queryString from 'query-string';

export const pushToUrlWithQuery = (history, filters, name, value) => {
  const qs = queryString.stringify({ ...filters, [name]: value }, { skipNull: true });
  history.push({ pathname: history.location.pathname, search: qs });
};

export const pushToUrlWithoutQuery = history => history.push(history.location.pathname);

export const getParsedObject = history => queryString.parse(history.location.search);

export const getNumberFromString = (name, value) => (name === 'currency' ? value : Number(value));

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
