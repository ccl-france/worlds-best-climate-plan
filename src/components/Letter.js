import React from 'react';
import { Link } from 'gatsby';
import Button from './Button';

const Letter = () => (
  <div className="relative bg-sand-100 p-10 md:p-20 mx-auto max-w-3xl rounded-sm">
    <h2 className="text-xl sm:text-2xl font-bold mb-4">
      Nous devons agir maintenant
    </h2>
    <p className="my-4">
      La France a besoin d&apos;une transition verte, et le plus tôt sera le
      mieux. Les accords de Paris et le Green Deal sont des bons débuts, mais
      ils ne nous disent pas comment ne pas atteindre les 2 degrés dans les
      prochaines années.
    </p>
    <p className="my-4">
      Nous proposons une solutions reconnue et soutenue par les meilleurs
      experts du climat ainsi que les énonomistes et sur laquelle la gauche et
      la droite peut se mettre d&apos;accord.
    </p>
    <p className="my-4">
      Nous voulons un système équilibré où nous, en tant que consommateurs,
      sommes financièrement récompensés pour nos achats durables et où les
      entreprises sont incitées financièrement à produire des produits
      respectueux du climat.
    </p>
    <p className="my-4">
      Par conséquent, nous voulons une taxe climatique socialement juste qui
      impose aux pollueurs de payer et où d&apos;autres mesures garantissent que
      la solution n&apos;affecte pas le clivage social et que nos émissions ne
      soient pas délocalisées à l&apos;étranger.
    </p>
    <p className="my-4">
      Une large taxe climatique signifie que le Danemark, à travers la
      consommation des entreprises et des citoyens, émet moins de gaz à effet de
      serre. C&apos;est le moyen le plus efficace de provoquer le changement.
    </p>
    <p className="my-4">
      Derrière le meilleur plan climatique du monde se trouve le Citizens&apos;
      Climate Lobby ainsi que bien d&apos;autres personnes investies.{' '}
      <Link to="/about-us" className="underline">
        En savoir plus sur nous
      </Link>
    </p>
    <Button className="my-4 md:mb-0">
      Signez la
      <span className="hidden sm:inline"> proposition citoyenne</span>
      &nbsp;&nbsp;✍️
    </Button>
  </div>
);

export default Letter;
