import CharacterCard from './CharacterCard'
function CharacterList(props) {
  
  const listItems = props.characters.map(character => {
    return (
      <li className='character__item' key={`character${character.id}`}>
        <CharacterCard imageUrl={character.image} name={character.name} species={character.species} gender={character.gender} status={character.status}/>
      </li>
    );});

  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default CharacterList;
