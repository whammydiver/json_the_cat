const fetchBreedDescription = function(breedName, callback) {

  const request = require('request');
  const searchTerm = breedName.slice(0, 3);

  request(`https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    const [data] = JSON.parse(body);

    if (!data) {
      callback(null, "Breed not found");
      return;
    }

    const desc = data.description;
    callback(null, desc);

  });
};

module.exports = { fetchBreedDescription };