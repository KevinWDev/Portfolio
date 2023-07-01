// Assets
import btnMenu from '../../assets/btn-menu.png';
import cvFile from '../../assets/Cv/Kevin.pdf'
// Styles
import '../../utils/styles/Header.css';
// Link
import { Link } from 'react-router-dom';
// Hooks
import { useState, useEffect, useRef } from 'react';



function Header() {

  const [isOpen, setIsOpen] = useState(false);

  let menuRef = useRef();
    useEffect(() => {

      let handler = (e) => {
        if(menuRef.current) {
          if (!menuRef.current.contains(e.target)) {
          setIsOpen(false)
          };
        };
      };
      
      document.addEventListener("mousedown", handler)

      return () => {
      document.removeEventListener("mousedown", handler)
      };

    
    }, []);

      const handleDownload = () => {
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = 'Kevin.pdf';
        link.click();
      };

  return isOpen ? (

    <header ref={menuRef}>

      <div className="container__open">
        <Link className='nav__link' to='/'>
          <h1 className='header__title'>Kevin Watteau</h1>
        </Link>
      
        <button className='btn__nav__close' onClick={() => setIsOpen(false)}><p>X</p></button>
      </div>
  
      <nav className='navigation'>
        <Link className='nav__link' to="/" onClick={() => setIsOpen(false)}>Accueil</Link>
        <Link className='nav__link' to="/projets" onClick={() => setIsOpen(false)}>Projets</Link>
        <button className='nav__link nav__link__cv' onClick={handleDownload}>Télécharger mon CV</button>
        <Link className='nav__link' to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </nav>
    
    </header>

  ) : (

    <header>

      <div className="container__close">

        <Link to='/' className='nav__link'>
          <h1 className='header__title'>Kevin Watteau</h1>
        </Link>

        <div className='container__img'>
          <img
            className="btn__menu"
            src={btnMenu}
            alt=""
            onClick={() => setIsOpen(true)}
          />
        </div>

      </div>

    </header>
  
  );
}

export default Header;
