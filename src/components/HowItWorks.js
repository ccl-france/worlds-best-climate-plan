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
      Le pollueur doit payer, mais sans implications sociales et sans déplacer
      ses émissions à l&apos;étranger.
    </p>
    <div className="mb-12 sm:flex sm:items-center">
      <div className="sm:w-1/2 sm:mr-20">
        <Badge>1.</Badge>
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
        <Badge>2.</Badge>
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
        <Badge>3.</Badge>
        <p>
          Les revenus des taxes climatiques sont reversés aux citoyens. Cela
          signifie que vous pouvez vous assurer que la taxe ne soit pas
          socialement biaisée et qu&apos;un Français moyen (en émission de gaz à
          effet de serre) n&apos;est pas impacté.
        </p>
      </div>
      <div className="hidden sm:w-1/2 sm:block">
        <img src="/how-it-works/loving.svg" />
      </div>
    </div>
  </div>
);

export default HowItWorks;
