import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ badge, label }) => (
  <div className="flex items-center">
    <span className="rounded-full w-10 h-10 flex items-center justify-center bg-green-500 text-xl text-sand-100 font-bold mb-4 mr-3">
      {badge}
    </span>
    {label}
  </div>
);
Badge.propTypes = {
  label: PropTypes.string.required,
  badge: PropTypes.string.required,
};

const HowItWorks = () => (
  <div className="sm:text-lg">
    <h2 className="text-2xl md:text-center font-bold mb-4 mx-auto">
      Comment ça fonctionne
    </h2>
    <p className="md:text-center max-w-xl md:mx-auto mb-16">
      Le cœur de la crise climatique est celui d’une injustice fondamentale.
      Cette injustice découle du fait que dans le système économique actuel, la
      pollution est gratuite, mais les coûts en sont assumés par la société et
      l’environnement.
      <br />
      La France se doit d&apos;imposer une contribution carbone sur les produits
      qui mettent en danger le climat et donc le futur de notre planète.
      <br />
      Voici le mécanisme que nous proposons :
    </p>
    <div className="mb-12 sm:flex sm:items-center">
      <div className="sm:w-1/2 sm:mr-20">
        <Badge badge="1." label="Mettre un prix sur la pollution" />
        <p>
          Les marchandises qui émettent des gaz à effet de serre dans leur
          production sont soumises à des frais supplémentaires. Lorsqu&apos;un
          article devient plus cher, nous en achetons moins. De cette façon,
          nous réduisons nos émissions et protégeons le climat.
        </p>
      </div>
      <div className="hidden sm:w-1/2 sm:block">
        <img src="/how-it-works/coffee.svg" />
      </div>
    </div>
    <div className="mb-12 sm:flex sm:items-center">
      <div className="sm:w-1/2 sm:mr-20">
        <Badge badge="2." label="Encourager les comportements vertueux" />
        <p>
          Un produit plus respectueux du climat est moins cher, alors nous
          l&apos;achetons à la place. L&apos;entreprise choisit de développer
          des produits plus respectueux du climat car elle peut être plus
          rentable ainsi.
        </p>
      </div>
      <div className="hidden sm:w-1/2 sm:block">
        <img src="/how-it-works/plant.svg" />
      </div>
    </div>
    <div className="mb-12 sm:flex sm:items-center">
      <div className="sm:w-1/2 sm:mr-20">
        <Badge badge="3." label="Accompagner les citoyens" />
        <p>
          Les revenus de cette contribution carbone sont reversés aux citoyens.
          Il s&apos;agit de justice sociale. Un français moyen (en émission de
          gaz à effet de serre) n&apos;a pas à être impacté. De plus, la
          conservation du pouvoir d&apos;achat des consommateurs préserve
          l&apos;économie et les entreprises.
        </p>
      </div>
      <div className="hidden sm:w-1/2 sm:block">
        <img src="/how-it-works/loving.svg" />
      </div>
    </div>
  </div>
);

export default HowItWorks;
