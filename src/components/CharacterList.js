import CharacterCard from './CharacterCard'
import { facepalm } from '../images/ImageList'
import '../styles/CharacterList.scss'
function CharacterList(props) {

  const listItems = props.alert ? (
    props.wrongText.length >= 5 ? (
      <img src={facepalm} alt='Rick facepalming really hard'></img>
    ) : (
      <p className='alert'>What kind of a lame-ass would type "{props.wrongText}"?!</p>
    )
  ) : (
    props.characters
      .sort((rick, morty) => (rick.name > morty.name ? 1 : rick.name === morty.name ? (rick.id > morty.id ? 1 : -1) : -1))
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
      })
  );
  return (
    <ul className='character__list'>
      {listItems}
    </ul>
  );
}

export default CharacterList;
