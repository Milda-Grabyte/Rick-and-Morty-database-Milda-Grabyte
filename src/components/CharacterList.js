import CharacterCard from './CharacterCard'
function CharacterList(props) {

  const listItems = props.alert ? (
    props.wrongText.length >= 5 ? (
      <img src='https://i.pinimg.com/originals/e4/48/63/e44863ebec8dd76213734a95fe6094f1.gif' alt="Rick facepalming really hard"></img>
    ) : (
      <p className='alert'>What kind of a lame-ass would type "{props.wrongText}"?!</p>
    )
  ) : (
    props.characters.map((character) => {
      return (
        <li className='character__item' key={`character${character.id}`}>
          <CharacterCard
            imageUrl={character.image}
            name={character.name}
            species={character.species}
            gender={character.gender}
            status={character.status}
          />
        </li>
      );
    })
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default CharacterList;
