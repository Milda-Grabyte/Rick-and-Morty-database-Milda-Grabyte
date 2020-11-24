import React from 'react';

const Filters = (props) => {
  
  const handleFilter = (ev) => {
    props.handleSearchText(ev.target.value);
  };

  return (
    <form className='search-input'>
      <label className='form__label' htmlFor='name'>
      </label>
      <input className='form__input--text' type='text' id='name' onChange={handleFilter} />
    </form>
  );
};

export default Filters;
