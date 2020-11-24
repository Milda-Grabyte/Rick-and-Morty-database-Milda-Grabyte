import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/App.scss';
import api from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail'
import { logo } from '../images/ImageList';

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchText, setSearchText] = useState('');
  
   useEffect(() => {
     api.getDataFromApi().then((data) => {
       setCharacters(data.results);
     });
   }, []);
    
  const handleSearchText = searchText => {
    setSearchText(searchText);
  };

  const searchedCharacters = characters.filter(character => {
    return character.name.toLowerCase().includes(searchText.toLowerCase());
  });

  const renderCharacterDetail = (props) => {
    const detailId = parseInt(props.match.params.id);
    const detail = characters.find((character) => character.id === detailId);
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
  };
   return (
     <>
       <div className='main-container'>
         <main>
           <Switch>
             <Route
               exact
               path='/'
               render={() => (
                 <>
                   <header>
                     <img src={logo} alt='Rick and Morty logo'></img>
                     <Filters handleSearchText={handleSearchText} />
                   </header>
                   <CharacterList
                     alert={searchedCharacters.length === 0}
                     wrongText={searchText}
                     characters={searchText === '' ? characters : searchedCharacters}
                   />
                 </>
               )}
             />
             <Route path='/character/:id' render={renderCharacterDetail}/>
           </Switch>
         </main>
       </div>
     </>
   );
}

export default App;