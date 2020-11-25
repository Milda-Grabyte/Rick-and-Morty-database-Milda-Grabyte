const Species = (props) => {
  let speciesIcon;
  if (props.species === 'Human' && props.gender === 'Male') {
    speciesIcon = '🧔🏻';
  } else if (props.species === 'Human' && props.gender === 'Female') {
    speciesIcon = '👩🏻‍🦰';
  } else if (props.species === 'Alien') {
    speciesIcon = '👽';
  } 
  return <p className='char__species det__species'>{speciesIcon}</p>;
};

export default Species;
