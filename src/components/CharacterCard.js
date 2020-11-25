import Species from './Species';
import LifeStatus from './LifeStatus';
import { Link } from 'react-router-dom';
import '../styles/CharacterCard.scss'

function CharacterCard(props) {   
 
  const gender = props.gender === 'unknown' ? 'Gender unknown' : props.gender;
 
  return (
    <article className='char--container'>
      <Link className='char__link--container' to={`/character/${props.id}`}>
        <img className='char__image' src={props.imageUrl} alt={props.name} />
        <h2 className='char__name'>{props.name}</h2>
        <Species gender={gender} species={props.species} />
        <LifeStatus status={props.status} />
      </Link>
    </article>
  );
}

export default CharacterCard;
