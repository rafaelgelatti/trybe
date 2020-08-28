const divFunction = async (number) => {
  const newArr = [2, 3, 5, 10];
  return newArr.reduce((acc, element, index) => {
    acc[index] = Math.round(number / element);
    return acc;
  }, []);
};

const sumAll = async (arr) => {
  return arr.reduce((acc, element) => {
    return acc + element;
  }, 0);
};

new Promise((resolve, reject) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const newArr = arr.reduce((acc, _, index) => {
    const value = Math.floor(Math.random() * 50);
    acc[index] = value * value;
    return acc;
  }, []);
  const totalSum = newArr.reduce((acc, element) => {
    return acc + element;
  }, 0);
  if (totalSum > 8000) {
    return reject(new Error(totalSum));
  }
  resolve(totalSum);
})
.then(number => divFunction(number))
.then(arr => sumAll(arr))
.then(msg => console.log(msg))
.catch((err) => console.log(`${err} it's over 8 THOUSAND! This promise must be broken!`));
