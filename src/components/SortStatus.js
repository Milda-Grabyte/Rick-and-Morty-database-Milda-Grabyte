import React from 'react';
import '../styles/SortStatus.scss'

function SortStatus(props) {
  return (
    <div className='sort--status'>
      <label className='sort--status__label' htmlFor='sort'>
        Sort by status:
      </label>
      <select className='sort--status__input' name='sort' onChange={props.sortByStatus}>
        <option value='All'>All</option>
        <option value='Dead'>Dead</option>
        <option value='Alive'>Alive</option>
        <option value='unknown'>Unknown</option>
      </select>
    </div>
  );
}

export default SortStatus;
