import Species from './Species';
import LifeStatus from './LifeStatus';
import { Link } from 'react-router-dom';

function CharacterCard(props) {
  return (
    <article className='char--container'>
      <Link to={`/character/${props.id}`}>
        <div className='char__image--container'>
          <img className='char__image' src={props.imageUrl} alt={props.name}></img>
        </div>
        <h2 className='char__name'>{props.name}</h2>
        <p className='char__gender'>{props.gender}</p>
        <Species className='char__species' gender={props.gender} species={props.species} />
        <LifeStatus className='char__life-status' status={props.status} />
      </Link>
    </article>
  );
}

export default CharacterCard;
