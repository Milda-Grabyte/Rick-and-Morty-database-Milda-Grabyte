import { dead, alive } from '../images/ImageList';
import '../styles/LifeStatus.scss'

const LifeStatus = (props) => {
  let statusIcon;
  if (props.status === 'Alive') {
    statusIcon = <img className='icon--alive' src={alive} />;
  } else if (props.status === 'Dead') {
    statusIcon = <img className='icon--dead' src={dead} />;
  } else if (props.status === 'unknown') {
    statusIcon = (
      <div className='status__container'>
        <img className='icon--dead' src={dead} />
        <p> ? </p>
        <img className='icon--alive' src={alive} />
      </div>
    );
  }
  return <p>{statusIcon}</p>;
};

export default LifeStatus;