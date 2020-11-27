import '../styles/Sort.scss'

function Sort(props) {
  
  return (
    <div className='sort'>
      <label className='sort__label' htmlFor='sort'>
        Sort by name:
      </label>
      <select className='sort__input' name='sort' id='sort' onChange={props.sortByName}>
        <option name='sort' value='ascending'>
          A &gt; Z
        </option>
        <option name='sort' value='descending'>
          Z &gt; A
        </option>
      </select>
    </div>
  );
};

export default Sort;