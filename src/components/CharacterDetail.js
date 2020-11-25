import LifeStatus from './LifeStatus';
import Species from './Species';
import { Link } from 'react-router-dom';
import '../styles/CharacterDetail.scss'

function CharacterDetail(props) {
  const origin = props.origin !== 'unknown' ? props.origin : 'Unknown origin';
  const gender = props.gender === 'unknown' ? 'Gender unknown' : props.gender;
  return (
    <article className='det--container'>
      <div className='det__button--container'>
        <button className='det__button' type='button'>
          <Link to='/'>&lt; Go back</Link>
        </button>
      </div>
      <img className='det__image' src={props.imageUrl} alt={props.name}></img>
      <h2 className='det__name'>{props.name}</h2>
      <p className='det__gender'>{gender}</p>
      <Species gender={gender} species={props.species} />
      <LifeStatus status={props.status} />
      <p className='det__origin'>From: {origin}</p>
      <p className='det__episode-count'>Number of episodes: {props.episodes}</p>
    </article>
  );
}

export default CharacterDetail;
