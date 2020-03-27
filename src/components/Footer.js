import React from 'react';
import { Link } from 'gatsby';

const LinkStyle =
  'font-bold block my-2 md:my-6 hover:text-green-300 transition ease-in-out duration-200';

const Footer = () => (
  <div className="bg-green-900 text-green-500">
    <div className="py-8 md:py-24 px-8 md:max-w-5xl mx-auto">
      <div className="md:flex -mx-8">
        <div className="md:w-1/3 m-8">
          <Link className={LinkStyle} to="/">
            Accueil
          </Link>
          <Link className={LinkStyle} to="/about-the-plan">
            A propos du plan
          </Link>
          <Link className={LinkStyle} to="/about-us">
            A propos de nous
          </Link>
          <Link className={LinkStyle} to="/privacy-policy">
            Politique de confidentialité
          </Link>
        </div>
        <div className="md:w-1/3 m-8">
          <a
            className={LinkStyle}
            href="https://citizensclimatelobby.org/"
            target="blank"
          >
            Citizen&apos;s Climate Lobby
          </a>
          <a
            className={LinkStyle}
            href="https://ccl-france.org/"
            target="blank"
          >
            Citizen&apos;s Climate Lobby France
          </a>
        </div>
        <div className="md:w-1/3 m-8">
          <a
            className={LinkStyle}
            href="mailto:contact@lemeilleurplanclimatdumonde.fr"
          >
            contact@lemeilleurplanclimatdumonde.fr
          </a>
        </div>
      </div>
      <p className="opacity-50 text-center mt-6">
        &copy; Revenu Climatique 2020
      </p>
    </div>
  </div>
);

export default Footer;
