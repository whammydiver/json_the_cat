const request = require('request');
const breed = process.argv.slice(2);
const searchTerm = breed[0].slice(0, 3);

request(`https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`, (error, response, body) => {

  if (error) {
    console.log(`Request error. ${error}`);
    return;
  }

  const [data] = JSON.parse(body);

  if (!data) {
    console.log('Breed not found');
    return;
  }

  console.log(data.description);

  
});