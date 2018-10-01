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

const getCurrencyUSD = (cards, usd) => {
  const list = cards;
  list.forEach(card => (card.price = card.price / usd.USD_UAH));
  return list;
};
const getCurrencyEUR = (cards, eur) => {
  const list = cards;
  list.forEach(card => (card.price = card.price / eur.EUR_UAH));
  return list;
};
