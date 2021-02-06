import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { ModalContext } from './Form/Modal';
import Button from './Button';

const pages = [
  ['/', 'Accueil'],
  ['/supporters', 'Ils nous soutiennent'],
  ['/about-the-plan', 'Le plan'],
  ['/faq', 'Des questions ?'],
];

const Menu = ({ transparent = false }) => {
  const [isSticky, setSticky] = useState(false);

  const openModal = useContext(ModalContext);

  const handleScroll = () => {
    setSticky(window.scrollY > 50);
  };

  useEffect(() => {
    // Scrolling - activate menu background
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={classNames(
          'fixed w-full z-30 flex items-center transition-colors duration-300',
          {
            'bg-green-700': !transparent || isSticky,
          }
        )}
      >
        <Link to="/">
          <img
            src="/logo_white.png"
            alt=""
            className="h-12 md:h-12 m-4 md:mx-8"
          />
        </Link>
        {pages.map(([href, title]) => (
          <Link
            activeClassName={href !== '/' ? 'menu-item-active' : null}
            className="menu-item cursor-pointer m-6 text-sand-200 font-bold hidden md:block"
            to={href}
            key={href}
          >
            {title}
          </Link>
        ))}

        <Button secondary className="mx-4 ml-auto xl:block" onClick={openModal}>
          Rejoignez le mouvement citoyen
        </Button>
      </div>
      {/* filler */}
      {!transparent && <div className="h-20 w-full"></div>}
    </div>
  );
};

Menu.propTypes = {
  transparent: PropTypes.boolean,
};

export default Menu;
