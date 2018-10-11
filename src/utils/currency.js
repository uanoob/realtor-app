const getCurrencyUSD = (cards, usd) => cards.map((obj) => {
  const newObj = Object.assign(
    {},
    ...Object.keys(obj).map((k) => {
      let result;
      if (k === 'price') {
        result = { [k]: Math.floor(obj[k] / usd.USD_UAH) };
      } else {
        result = { [k]: obj[k] };
      }
      return result;
    }),
  );
  return newObj;
});

const getCurrencyEUR = (cards, eur) => cards.map((obj) => {
  const newObj = Object.assign(
    {},
    ...Object.keys(obj).map((k) => {
      let result;
      if (k === 'price') {
        result = { [k]: Math.floor(obj[k] / eur.EUR_UAH) };
      } else {
        result = { [k]: obj[k] };
      }
      return result;
    }),
  );
  return newObj;
});

export const toggleCurrency = (cards, value, usd, eur) => {
  switch (value) {
    case 'CURRENCY_UAH':
      return cards;
    case 'CURRENCY_USD':
      return getCurrencyUSD(cards, usd);
    case 'CURRENCY_EUR':
      return getCurrencyEUR(cards, eur);
    default:
      return cards;
  }
};

export const getCurrencySign = (sign) => {
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
