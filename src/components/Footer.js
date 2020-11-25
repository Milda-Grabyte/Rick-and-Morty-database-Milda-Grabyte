import '../styles/Footer.scss';

function Footer() {
  return (
    <nav className='footer__nav'>
      <p className='footer__text'>Made by</p>
      <a className='footer__link footer__link--milda' href='https://github.com/Milda-Grabyte' target='_blank'>
        Milda Grabyte
      </a>
      <p className='footer__text'>2020</p>
      <a className='footer__link footer__link--adalab' href='https://adalab.es/' target='_blank'>
        Adalab
      </a>
    </nav>
  );
}

export default Footer;
