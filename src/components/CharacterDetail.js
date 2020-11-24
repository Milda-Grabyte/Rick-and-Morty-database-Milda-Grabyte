import { Link } from 'react-router-dom';
function CharacterDetail(props) {
  return (
    <>
      <button type='button'>
        <Link to='/'>Go back</Link>
      </button>
      <article className='char--container'>
        <div className='char__image--container'>
          <img className='char__image' src={props.imageUrl} alt={props.name}></img>
        </div>
        <h2 className='char__name'>{props.name}</h2>
        <p className='char__species'>{props.species}</p>
        <p className='char__gender'>{props.gender}</p>
        <p className='char__life-status'>{props.status}</p>
        <p className='char__origin'>{props.origin}</p>
        <p className='char__episode-count'>{props.episodes}</p>
      </article>
    </>
  );
}

export default CharacterDetail;
