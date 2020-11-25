import React from 'react';
import '../styles/Filters.scss'

const Filters = (props) => {
  
  const handleFilter = (ev) => {
    props.handleSearchText(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  return (
    <form className='search-input' onSubmit={handleSubmit}>
      <label className='form__label' htmlFor='name'></label>
      <input className='form__input--text' type='text' id='name' onChange={handleFilter} value={props.storedValue} />
    </form>
  );
};

export default Filters;
