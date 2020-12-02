const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(() => console.log('Error. Can’t access fetch response.'));
};

export default { getDataFromApi };

//The other provided source was not accessible