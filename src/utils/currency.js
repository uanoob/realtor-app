export const getCurrencySign = id => {
  switch (id) {
    case 'CURRENCY_UAH':
      return 'uah';
    case 'CURRENCY_USD':
      return 'usd';
    case 'CURRENCY_EUR':
      return 'eur';
    default:
      return 'uah';
  }
};

export const renderCurrencySign = currencySign => {
  switch (currencySign) {
    case 'uah':
      return '\u20B4';
    case 'usd':
      return '\u0024';
    case 'eur':
      return '\u20AC';
    default:
      return '\u20B4';
  }
};
