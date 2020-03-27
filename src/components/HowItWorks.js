import React from 'react';

const Badge = ({ children }) => (
  <div className="rounded-full w-10 h-10 flex items-center justify-center bg-green-500 text-xl text-sand-100 font-bold mb-4">
    {children}
  </div>
);

const HowItWorks = () => (
  <div className="sm:text-lg">
    <h2 className="text-2xl md:text-center font-bold mb-4 mx-auto">
      Comment ça fonctionne
    </h2>
    <p className="md:text-center max-w-xl md:mx-auto mb-16">
      La France se doit d&apos;imposer une taxe sur les produits qui mettent en
      danger le climat et donc le futur de notre planète.
      <br />
      Forureneren betaler, men uden at det rammer socialt skævt, eller at alle
      vores udledninger flyttes til udlandet.
    </p>
    <div className="mb-12 sm:flex sm:items-center">
      <div className="sm:w-1/2 sm:mr-20">
        <Badge>1.</Badge>
        <p>
          Varer, der udleder drivshusgasser i deres produktion pålægges en
          ekstra afgift. Når en vare bliver dyrere, køber vi mindre af den. På
          den måde reducerer vi vores udledning og belaster klimaet mindre.
        </p>
      </div>
      <div className="hidden sm:w-1/2 sm:block">
        <img src="/how-it-works/coffee.svg" />
      </div>
    </div>
    <div className="mb-12 sm:flex sm:items-center">
      <div className="sm:w-1/2 sm:mr-20">
        <Badge>2.</Badge>
        <p>
          En mere klimavenlig vare er billigere, så måske køber vi den i stedet.
          Virksomheden vælger at udvikle mere klimavenlige produkter, fordi det
          bedre kan betale sig.
        </p>
      </div>
      <div className="hidden sm:w-1/2 sm:block">
        <img src="/how-it-works/plant.svg" />
      </div>
    </div>
    <div className="mb-12 sm:flex sm:items-center">
      <div className="sm:w-1/2 sm:mr-20">
        <Badge>3.</Badge>
        <p>
          Indtægt fra klimaafgifterne betales tilbage til borgerne. Det betyder,
          at man kan sørge for, at afgiften ikke rammer socialt skævt, og at en
          gennemsnitlig dansker ikke bliver ramt på pengepungen.
        </p>
      </div>
      <div className="hidden sm:w-1/2 sm:block">
        <img src="/how-it-works/loving.svg" />
      </div>
    </div>
  </div>
);

export default HowItWorks;
