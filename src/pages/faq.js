import React from 'react';
import Collapse, { Panel } from 'rc-collapse';
import { FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const faq = [
  [
    'Pourquoi la France devrait-elle avoir le meilleur plan climatique du monde ?',
    "Les politiciens danois sont d'accord: le Danemark doit réduire ses émissions de 70%. par rapport au niveau de 1990. Il peut être facilement atteint, même s'il est ambitieux. Oui, en fait très ambitieux. Le seul autre pays aussi ambitieux est la Suède. \n \n En ce qui concerne les émissions mondiales totales de gaz à effet de serre, le Danemark n'est qu'une fraction. En 2014, le Danemark a émis 0,27% du total des émissions mondiales de gaz à effet de serre. Mais pourquoi devrions-nous faire quoi que ce soit? \n \n Voici la vérité qui dérange: si nous regardons notre empreinte climatique actuelle par habitant, le Danemark est l'un des pires pays - et pire encore si nous regardons toutes les émissions historiques - c'est-à-dire la pollution que le Danemark est à blâmer depuis la percée industrielle. Cela nous donne la responsabilité de faire mieux. \n \nNous sommes l'un des pires garçons de la classe, mais en même temps, nous avons d'énormes ambitions pour aller mieux, ce qui nous donne une opportunité unique. \n \n Le Danemark, si nous choisissons le meilleur plan climatique, peut montrer au monde entier qu'une transition verte peut être réalisée - et inspirer ainsi tous les autres pays à faire de même.",
  ],
  [
    'Un prix de la pollution est-il suffisant pour nous permettre une réduction de 70% du CO2 en 2030 ?',
    'Non, car nous sommes pressés. Mais cela peut déjà nous faire énormément progresser. Par conséquent, les politiciens doivent également investir dans la recherche, les infrastructures et les incitations pour permettre de gagner les derniers pourcentages.',
  ],
  [
    'Quels sont les inconvénients ? Cela semble trop beau pour être vrai.',
    'Malheureusement, la taxe ne suffit pas en soi pour atteindre 70%. Par conséquent, les politiciens doivent également prendre des décisions difficiles, par exemple: zones sans voiture, infrastructure de recharge pour voitures électriques, réglementation de la construction, ...',
  ],
  [
    "La solution ne devrait-elle pas être utilisée dans l'ensemble de l'UE ou du monde avant d'être efficace ?",
    "Une solution idéale pour le climat serait que le meilleur plan climatique du monde soit mis en œuvre partout dans le monde ou dans un premier temps dans l'UE. Quoi qu'il se passe en dehors de nos frontières, les économistes restent convaincus qu'il est préférable que la France suive ce plan car c'est le meilleur moyen (et le moins cher !)  pour atteindre nos objectifs. De plus, nous pouvons également montrer la voie aux autres pays.",
  ],
  [
    'Avez-vous besoin de calculer la quantité de CO2 dans chaque produit ?',
    "Non. Ici, l'astuce consiste à placer la taxe le plus près possible de la source de pollution : sur les combustibles fossiles, les ruminants et les matériaux de production de polluants tels que le ciment. Lorsque le prix du CO2 est inclus dans ces produits depuis le début, cela est reflété en passant d'un produit à l'autre jusqu'au produit final acheté par le consommateur.",
  ],
  [
    'Faut-il éliminer toutes les taxes sur le CO2 existantes ?',
    "Nous ne sommes pas obligés de le faire ! Aujourd'hui, bon nombre de nos taxes climatiques sont utilisées pour financer notre État providence et leur suppression nécessitera de trouver de nouvelles sources de revenus. Par conséquent, il est plus facile de les ajouter aux impôts existants.",
  ],
  [
    'Les industries déjà couvertes par le système de quotas ETS devraient-elles également payer la taxe ?',
    "Ils devront le faire en complément, car les quotas de l'ETS sont trop bon marché pour atteindre la cible des 70%. Il est possible de rembourser l'équivalent du prix ETS aux industries concernées.",
  ],
  [
    "Faut-il rendre tout l'argent aux citoyens ?",
    "Idéalement, oui ! L'argent est réparti de manière totalement égale entre tous les citoyens, donc que vous soyez millionnaire ou que vous soyez bénéficiaires de prestations sociales, vous recevez le même montant. Pour la plupart, ce montant couvrira plus que le coût les plus élevés des produits carbonés, et plus vous aurez un mode de vie écologique, plus vous pourrez mettre de l'argent de côté. Dans d'autres pays, ils ont choisi de consacrer une part au bien-être ou à la recherche - ce n'est pas ce que les économistes recommandent.",
  ],
  [
    "Tous les emplois partiront-ils à l'étranger ?",
    "C'est très peu probable. Premièrement, de nombreux autres pays deviennent également ambitieux (et ne veulent pas faire entrer des pollueurs chez eux). Parce que l'UE prévoit un tarif climatique, les pays tiers seront également ambitieux. Il existe également des possibilités d'améliorer notre compétitivité. Enfin et surtout, le meilleur plan climatique du monde signifie que nous nous occupons tous de la transition verte. De nombreuses nouvelles opportunités verront le jour au fur et à mesure que les produits verts deviendront plus compétitifs.",
  ],
  [
    "Y a-t-il d'autres pays qui l'ont déjà fait ?",
    "La Colombie-Britannique au Canada y est parvenue avec succès - et elle est maintenant déployée dans tout le Canada. La Suisse aussi depuis 2007. Il est à l'ordre du jour dans plusieurs autres pays.",
  ],
  [
    "Que dit l'industrie ?",
    "Certaines grandes entreprises danoises supportent un prix de la pollution. Cela s'applique, par exemple, à Nordea, Danfoss, Vestas et Ørsted. Dansk Industri et Dansk Erhverv sont généralement opposés à des \"accusations stupides\". Ensuite, il est heureux que le meilleur plan climatique du monde soit super intelligent! Parce qu'il est moins cher sur le plan socio-économique et plus prévisible que les alternatives, il est presque normal que les entreprises, dans l'ensemble, adorent le plan. Certains vont se plaindre (en particulier les pollueurs), mais c'est plus parce que certaines de leurs entreprises ne peuvent pas vraiment être durables - et ils peuvent voir qu'il sera difficile d'être climatiquement neutre en 2050. Mais Aalborg Portland et Arla eux-mêmes devraient voir l'escroquerie - alors ils peuvent vendre plus de Futurecem et de boissons végétales respectivement",
  ],
  [
    'Combien devrait coûter le CO2 ?',
    "Pour nous débarrasser de nos émissions, le prix doit être suffisamment élevé. En 2018, le Conseil du climat a mentionné un prix de plus de 800 DKK par tonne de CO2 émise, mais c'était avant l'objectif de 70% a vu le jour. Il est probable que le prix se situera entre 1000 $ et 1500 $ d'ici 2030.",
  ],
  [
    "Comment financer l'État providence si les taxes sur les combustibles fossiles ne sont plus disponibles?",
    "En supposant que nous voulons réellement être climatiquement neutres d'ici 2050, nous n'utiliserons pas de combustibles fossiles, c'est pourquoi nous devons trouver de nouvelles sources de revenus quoi qu'il arrive. Cela n'a rien à voir avec le meilleur plan climatique du monde.",
  ],
  [
    "Cela signifie t-il que je ne peux plus prendre l'avion ?",
    "Non. Cela signifie simplement que vous payez le prix réel de votre vol. Un voyage à Madrid sera donc plus cher qu'aujourd'hui, mais si vous il est prioritaire pour vous, ce sera toujours possible de partir en vacance en famille. En parallèle, un prix du CO2 poussera les compagnies aériennes à accélérer le développement de carburants et d'avions respectueux du climat, ce qui rendra possible les voyages écologiques à l'avenir.",
  ],
  [
    'Ne pouvez-vous pas simplement interdire les choses à la place ?',
    "Ce serait possible, mais il y a beaucoup de choses à interdire. De plus, les interdictions touchent souvent de manière plus impactante les plus démunis, qui ne peuvent pas se permettre des alternatives. Avec le meilleur plan climatique du monde, le prix réel du produit sera utilisé - et ensuite vous décidez si vous pensez qu'un produit en vaut la peine.",
  ],
  [
    'Ne pourriez-vous pas simplement mettre une étiquette climatique sur tout et laisser les gens décider eux-mêmes de les acheter ?',
    "Ce serait un bon début, mais il est peu probable que cela fasse une différence. Il y a une raison pour laquelle une taxe sur les cigarettes à été mise en place, malgré les images horribles sur l'emballage depuis quelques années.",
  ],
  [
    "N'est-ce pas juste une façon cachée de faire payer les citoyens ?",
    "Rendre l'argent par le biais du revenu climatique n'est qu'une façon de le faire. Vous pouvez également choisir de réduire d'autres impôts ou d'augmenter l'allocation personnelle. Cependant, les montants ne seront pas particulièrement élevés pour la plupart, de sorte qu'il est peu probable qu'ils affectent le compte bancaire des citoyens d'une manière qui les dissuadera de travailler.",
  ],
  [
    'Ne pouvons-nous pas simplement soutenir les entreprises tout au long de la transition verte ?',
    "C'est possible, mais c'est une solution plus coûteuse. C'est parce que l'argent provient des fonds publics (c'est-à-dire vos impôt) et parce qu'il est vraiment difficile d'en faire assez pour atteindre les 70%. Chaque année, les politiciens devraient calculer combien de CO2 ils ont économisé, puis prendre de nouvelles mesures au lieu de simplement augmenter la taxe. Ce n'est en aucun cas assez ambitieux.",
  ],
];

const P = ({ children }) => (
  <p className="sm:text-lg leading-relaxed my-4">{children}</p>
);

const FAQ = () => {
  return (
    <Layout>
      <SEO
        title="Foire aux questions du meilleur plan climat du monde"
        description="Vous avez des question ssur le meilleur plan climat du monde"
      />
      <section className="w-full max-w-4xl mx-auto py-16 sm:pb-32 px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl my-6 font-bold">Foire aux questions</h2>
          <Collapse
            accordion
            className="bg-transparent border-0 text-green-900"
            expandIcon={({ isActive }) =>
              isActive ? (
                <FaChevronCircleUp className="mr-4 flex-none text-green-500 text-2xl" />
              ) : (
                <FaChevronCircleDown className="mr-4 flex-none text-green-500 text-2xl" />
              )
            }
          >
            {faq.map(([question, answer]) => (
              <Panel
                key={question}
                header={question}
                headerClass="flex items-center py-4 cursor-pointer"
              >
                {answer.split('\n').map((paragraph, i) => (
                  <P key={i}>{paragraph}</P>
                ))}
              </Panel>
            ))}
          </Collapse>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
