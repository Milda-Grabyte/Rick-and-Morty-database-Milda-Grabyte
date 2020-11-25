const getDataFromApi = () => {
  return fetch('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(() => console.log('Error. Can’t access fetch response.'));
};

export default { getDataFromApi };

//The other provided source was not accessible