const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = () => {
  return fetch(API_URL, myObject)
  .then(response => console.log(response));  
};

fetchJoke();