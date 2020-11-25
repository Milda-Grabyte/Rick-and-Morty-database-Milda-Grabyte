import LifeStatus from './LifeStatus';
import Species from './Species';
import { Link } from 'react-router-dom';

function CharacterDetail(props) {
  const origin = props.origin !== 'unknown' ? props.origin : 'Unknown origin';
  const gender = props.gender === 'unknown' ? 'Gender unknown' : props.gender;
  return (
    <article className='det--container'>
      <button type='button'>
        <Link to='/'>Go back</Link>
      </button>
      <img className='det__image' src={props.imageUrl} alt={props.name}></img>
      <h2 className='det__name'>{props.name}</h2>
      <p className='det__gender'>{gender}</p>
      <Species className='det__species' gender={gender} species={props.species} />
      <LifeStatus className='det__life-status' status={props.status} />
      <p className='det__origin'>{origin}</p>
      <p className='det__episode-count'>Number of episodes: {props.episodes}</p>
    </article>
  );
}

export default CharacterDetail;
