// FACTABLE

export const getItemsFromResponse = (response) => {
  return response.data.results.map(transformItem);
};

export const transformItem = (item) => {
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
    },
  };
};
