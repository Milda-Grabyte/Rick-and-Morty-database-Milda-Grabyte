import React from 'react';
import CharacterCard from './CharacterCard'
import { facepalm } from '../images/ImageList'
import '../styles/CharacterList.scss'
function CharacterList(props) {
  let listItems;
  if (props.alert) {
    if (props.wrongText.length >= 6) {
      listItems = <img className='alert--image' src={facepalm} alt='Rick facepalming really hard'></img>;
    } else {
      listItems = <p className='alert'>What kind of a lame-ass would type "{props.wrongText}"?!</p>;
    }
  } else {
<<<<<<< HEAD
    listItems = props.characters
      .sort((rick, morty) => (rick.name > morty.name ? 1 : rick.name === morty.name ? (rick.id > morty.id ? 1 : -1) : -1))
      // .filter((character) => {
      //   (props.sortedByStatus === 'All') ? character : props.SortedByStatus === character.status;
      // })
      .map((character) => {
=======
    let sorted;
    if (props.sortedByName === 'sort') {
      sorted = props.characters.sort((rick, morty) =>
        rick.name > morty.name ? 1 : rick.name === morty.name ? (rick.id > morty.id ? 1 : -1) : -1
      );
    } else if (props.sortedByName === 'sortReverse') {
      sorted = props.characters.sort((rick, morty) =>
        rick.name < morty.name ? 1 : rick.name === morty.name ? (rick.id < morty.id ? 1 : -1) : -1
      );
    } else {
      sorted = props.characters;
    }
    listItems = sorted.filter(character => {
    if (props.sortedByStatus === 'All') {
      return character;
    } else {
      return character.status === props.sortedByStatus;
    }
    })
  .map((character) => {
>>>>>>> dev
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
