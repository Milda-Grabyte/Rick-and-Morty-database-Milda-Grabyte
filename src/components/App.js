import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/App.scss';
import api from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail'
import { logo, notFound } from '../images/ImageList';
import propTypes from 'prop-types';
import Header from './Header'
import Footer from './Footer'

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchText, setSearchText] = useState('');
  const storedValue = localStorage.getItem('Reduce, Reuse, Re-Morty') || '';
  
   useEffect(() => {
     api.getDataFromApi().then((data) => {
       setCharacters(data.results);
     });
   }, []);
    
  const handleSearchText = searchText => {
    setSearchText(searchText);
    localStorage.setItem('Reduce, Reuse, Re-Morty', searchText);
  };

  const searchedCharacters = characters.filter(character => {
    return character.name.toLowerCase().includes(searchText.toLowerCase());
  });

  const renderCharacterDetail = (props) => {
    const detailId = parseInt(props.match.params.id);
    const detail = characters.find((character) => character.id === detailId);
    if (detail) {
      return (
        <CharacterDetail
          imageUrl={detail.image}
          name={detail.name}
          species={detail.species}
          gender={detail.gender}
          status={detail.status}
          origin={detail.origin.name}
          episodes={detail.episode.length}
          id={detail.id}
        />
      );
    } else {
      return <img className='image--not-found' alt='You failed' src={notFound}/>;
    }
  };
  return (
    <div className='main-container'>
      <Header logo={logo} />
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <>
              <Filters storedValue={storedValue} handleSearchText={handleSearchText} />
              <CharacterList
                alert={searchedCharacters.length === 0}
                wrongText={searchText}
                characters={searchText === '' ? characters : searchedCharacters}
              />
            </>
          )}
        />
        <Route path='/character/:id' render={renderCharacterDetail} />
      </Switch>
      <Footer />
    </div>
  );
}

App.propTypes = {
  characters: propTypes.array,
};

export default App;