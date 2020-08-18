const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const newList = (productsList, pricesList) => {
  return productsList.map((product, index) => ({ [product]: pricesList[index] }));
};

console.table(newList(products, prices));

// const listProducts = [{ Arroz: 2.99 },...]