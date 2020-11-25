import { dead, alive } from '../images/ImageList';
import '../styles/LifeStatus.scss'

const LifeStatus = (props) => {
  let statusIcon;
  if (props.status === 'Alive') {
    statusIcon = <img className='icon--alive' src={alive} alt='Alive... Still' />;
  } else if (props.status === 'Dead') {
    statusIcon = <img className='icon--dead' src={dead} alt='Dead as a doorknob' />;
  } else if (props.status === 'unknown') {
    statusIcon = (
      <>
        <img className='icon--dead det__icon--dead' src={dead} alt='Maybe dead' />
        <p className='q-mark det__q-mark'> ? </p>
        <img className='icon--alive det__icon--alive' src={alive} alt='Could be alive' />
      </>
    );
  }
  return <div className='status__container det__life-status'>{statusIcon}</div>;
};

export default LifeStatus;