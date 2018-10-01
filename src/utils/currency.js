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

const getCurrencyUSD = (cards, usd) =>
  cards.map(obj => {
    let newObj = Object.assign(
      {},
      ...Object.keys(obj).map(function(k) {
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

const getCurrencyEUR = (cards, eur) =>
  cards.map(obj => {
    let newObj = Object.assign(
      {},
      ...Object.keys(obj).map(function(k) {
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
