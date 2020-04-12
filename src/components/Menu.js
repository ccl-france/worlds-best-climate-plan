import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { ModalContext } from './Form/Modal';
import Button from './Button';

const pages = [
  ['/', 'Accueil'],
  ['/supporters', 'Soutiens'],
  ['/about-the-plan', 'A propos du plan'],
  ['/about-us', 'A propos de nous'],
];

const formatBackers = backers =>
  `${new Intl.NumberFormat('fr-FR').format(
    backers
  )} français ont signé la pétition`;

const Menu = ({ transparent = false }) => {
  const [isSticky, setSticky] = useState(false);
  const [backers, setBackers] = useState(null);

  const openModal = useContext(ModalContext);

  const handleScroll = () => {
    setSticky(window.scrollY > 50);
  };

  useEffect(() => {
    // Fetch backers
    const fetchData = async () => {
      const backers = sessionStorage.getItem('backers');
      if (backers) {
        setBackers(formatBackers(backers));
        return;
      }

      const res = await fetch(
        'https://eci.ec.europa.eu/007/public/api/report/map'
      );
      const json = await res.json();
      const { signatureCountryCount } = json;
      const fr = signatureCountryCount.find(scc => scc.countryCode === 'fr');
      setBackers(formatBackers(fr.count));
      sessionStorage.setItem('backers', fr.count);
    };
    fetchData();

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
        <p className="text-sand-100 mx-4 ml-auto hidden xl:block">{backers}</p>

        <a
          href="https://eci.ec.europa.eu/007/public/#/initiative"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            secondary
            className="mr-4 md:mr-8 ml-auto xl:ml-0"
            // onClick={openModal}
          >
            Soutenez-nous&nbsp;🌱
          </Button>
        </a>
      </div>
      {/* filler */}
      {!transparent && <div className="h-20 w-full"></div>}
    </div>
  );
};

export default Menu;
