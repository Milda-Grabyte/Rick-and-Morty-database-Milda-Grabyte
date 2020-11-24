import React, { useState, useEffect } from 'react';
// import { Route, Switch } from 'react-router-dom';
import '../styles/App.scss';
import api from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';
// import Detail from './CharacterDetail'

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
  console.log(characters);
   return (
     <>
       {/* <Switch> */}
         <div className='main-container'>
           <header>
             <img
               src='https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png'
               alt='Rick and Morty logo'
             ></img>
           </header>
           <main>
             {/* <Route exact path="/" component={App} />
             <Route path='/Detail' component={Detail} /> */}
             <Filters handleSearchText={handleSearchText} />
             <CharacterList characters={searchText === '' ? characters : searchedCharacters} />
           </main>
         </div>
       {/* </Switch> */}
     </>
   );
}

export default App;