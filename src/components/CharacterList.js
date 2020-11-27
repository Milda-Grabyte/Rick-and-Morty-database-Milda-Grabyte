import React from 'react';
import CharacterCard from './CharacterCard'
import { facepalm } from '../images/ImageList'
import '../styles/CharacterList.scss'
function CharacterList(props) {
  // Lines 6-31: if there is a <6 character sequence in the input field that is not found within any of the the names, the user gets a warning, if the sequence is >=6, an image appears. If the sequence is found, matching characters are sorted alphabetically by their names and are given props and set as list items.
  let listItems;
  if (props.alert) {
    if (props.wrongText.length >= 6) {
      listItems = <img className='alert--image' src={facepalm} alt='Rick facepalming really hard'></img>;
    } else {
      listItems = <p className='alert'>What kind of a lame-ass would type "{props.wrongText}"?!</p>;
    }
  } else {
    listItems = props.characters
      .sort((rick, morty) => (rick.name > morty.name ? 1 : rick.name === morty.name ? (rick.id > morty.id ? 1 : -1) : -1))
      // .filter((character) => {
      //   (props.sortedByStatus === 'All') ? character : props.SortedByStatus === character.status;
      // })
      .map((character) => {
        return (
          <li className='character__item' key={`character${character.id}`}>
            <CharacterCard
              imageUrl={character.image}
              name={character.name}
              species={character.species}
              gender={character.gender}
              status={character.status}
              id={character.id}
            />
          </li>
        );
      });
  }

  return <ul className='character__list'>{listItems}</ul>;
}

export default CharacterList;
