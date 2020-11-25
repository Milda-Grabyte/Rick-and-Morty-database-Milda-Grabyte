import '../styles/Header.scss';

function Header(props) {
  return (
  <img className='header__logo' src={props.logo} alt='Rick and Morty logo'></img>                
  );
}

export default Header;
