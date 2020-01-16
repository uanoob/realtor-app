export const toggleCurrency = (name, usd, eur) => {
  switch (name) {
    case 'CURRENCY_UAH':
      return 1;
    case 'CURRENCY_USD':
      return usd.USD_UAH;
    case 'CURRENCY_EUR':
      return eur.EUR_UAH;
    default:
      return 1;
  }
};

export const getCurrencySign = sign => {
  switch (sign) {
    case 'CURRENCY_UAH':
      return 'UAH';
    case 'CURRENCY_USD':
      return 'USD';
    case 'CURRENCY_EUR':
      return 'EUR';
    default:
      return 'UAH';
  }
};
