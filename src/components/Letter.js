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
      mieux. Les accords de Paris et le Green Deal énoncent des objectifs
      ambitieux (neutralité carbone d&apos;ici 2050), cependant aucun plan
      n&apos;a été détaillé afin d&apos;y parvenir.
    </p>
    <p className="my-4">
      Nous proposons une solutions reconnue et soutenue par les meilleurs
      experts du climat ainsi que les économistes et sur laquelle la gauche et
      la droite se mettent d&apos;accord.
    </p>
    <p className="my-4">
      Nous voulons un système équilibré où nous, en tant que consommateurs,
      sommes financièrement récompensés pour nos achats durables et où les
      entreprises sont incitées, de la même manière, à avoir une production
      respectueuse du climat.
    </p>
    <p className="my-4">
      Par conséquent, nous souhaitons une contribution carbone socialement juste
      qui impose aux producteurs et importateurs de combustibles fossiles de
      payer. Par ailleurs, d&apos;autres mesures doivent garantir que la
      solution n&apos;affectera pas le clivage social, et que ces émissions ne
      soient pas délocalisées à l&apos;étranger.
    </p>
    <p className="my-4">
      Une contribution carbone importante et croissante permettra à la France,
      au regard de la consommation des entreprises et des citoyens
      d&apos;émettre moins de gaz à effet de serre. C&apos;est le moyen le plus
      efficace d&apos;amorcer le changement.
    </p>
    <p className="my-4">
      Derrière le meilleur plan climat du monde se trouve de nombreux citoyens
      et associations.{' '}
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
