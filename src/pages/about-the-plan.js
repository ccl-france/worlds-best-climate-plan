import React from 'react';
import Collapse, { Panel } from 'rc-collapse';
import { FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa';
import Layout from '../components/Layout';
import FootNoteContainer, {
  FootNoteItem as FootNote,
} from '../components/FootNote';
import SEO from '../components/SEO';

const P = ({ children }) => (
  <p className="sm:text-lg leading-relaxed my-4">{children}</p>
);

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
    'Malheureusement, la taxe ne suffit pas en soi pour atteindre 70%. Par conséquent, les politiciens doivent également prendre des décisions difficiles, par exemple: zones sans voiture, infrastructure de recharge, réglementation de la construction, ...',
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
    "Ce serait un bon début, mais il est peu probable que cela fasse une différence. Il y a une raison pour laquelle une taxe est sur les cigarettes à été mise en place, malgré les images horribles sur l'emballage depuis quelques années.",
  ],
  [
    "N'est-ce pas juste une façon cachée de faire payer les citoyens ?",
    "Rendre l'argent par le biais du revenu climatique n'est qu'une façon de le faire. Vous pouvez également choisir de réduire d'autres impôts ou d'augmenter l'allocation personnelle. Cependant, les montants ne seront pas particulièrement élevés pour la plupart, de sorte qu'il est peu probable qu'ils affectent le compte bancaire des citoyens d'une manière qui les dissuadera de travailler.",
  ],
  [
    'Ne pouvons-nous pas simplement soutenir les entreprises tout au long de la transition verte ?',
    "C'est possible, mais c'est une solution plus couteuse. C'est parce que l'argent provient des fonds publics (c'est-à-dire vos impôt) et parce qu'il est vraiment difficile d'en faire assez pour atteindre les 70%. Chaque année, les politiciens devraient calculer combien de CO2 ils ont économisé, puis prendre de nouvelles mesures au lieu de simplement augmenter la taxe. Ce n'est en aucun cas assez ambitieux.",
  ],
];

const ThePlan = () => {
  return (
    <Layout>
      <SEO
        title="Le meilleur plan climat du monde"
        description="Pourquoi ce plan climat est il le meilleur du monde"
      />
      <section className="w-full max-w-4xl mx-auto py-16 px-6">
        <div className="max-w-2xl">
          <FootNoteContainer>
            <h1 className="text-2xl font-bold mb-4">
              La révolution : en mode facile
            </h1>
            <P>
              Comme nous tous, vous avez probablement une légère anxiété à
              propos de la crise climatique. Vous le savez : si nous
              n&apos;agissons pas rapidement, les conséquences seront
              dramatiques. Mais, comme nous tous, vous voulez continuer à
              utiliser votre voiture. Et les manifestations avec Greta Thunberg
              ne sont peut être pas votre tasse de thé.
            </P>
            <P>
              Vous voulez que la crise du climat se règle d&apos;elle même, sans
              même y penser. Vous voulez une révolution facile.
            </P>
            <P>
              Nous sommes d&apos;accord avec vous. Une solution existe, elle
              permet d&apos;attribuer un prix aux émissions de gaz à effet de
              serre, sans faire peser ce coût sur les Français et sans impacter
              leurs emplois.
            </P>
            <P>
              Vous pensez que ce n&apos;est pas possible ? Pourtant cette
              solution ne vient pas de nulle part.
            </P>
            <P>
              En fait, cette solution est si bien pensée que{' '}
              <FootNote
                title="Economists' Statement on Carbon Dividends"
                url="https://clcouncil.org/economists-statement/"
                from="Climate Leadership Council"
                date="16 janvier 2019"
              >
                27 lauréats du prix Nobel ainsi que 3589 économistes la
                soutiennent.
              </FootNote>
            </P>
            <P>
              Et participer à cette révolution ne vous prendra que 5 minutes.
              Exactement ce que l&apos;on vous a promis. La transition
              écologique depuis votre canapé. La révolution, facile.
            </P>

            <h2 className="text-lg my-6 font-bold">Le pollueur doit payer</h2>
            <P>
              Lorsque vous jetez des déchets par la fenêtre, vous recevez dans
              la plupart des cas une amende. C&apos;est parce que ce n&apos;est
              pas aux autres de s&apos;occuper de vos déchets.
            </P>
            <P>
              Cependant, lorsque quelqu&apos;un pollue avec des émissions de gaz
              à effet de serre, une des causes principales du réchauffement
              climatique, il n&apos;y a pas d&apos;amende ou de remontrances.
              Prenons comme exemple deux commercants qui vendent des T-shirts.
              La première entreprise possède une usine dont l&apos;éléctricité
              provient d&apos;énergie renouvenable. La deuxième obtient son
              éléctricité par le pétrole ou le charbon. La deuxième usine pollue
              bien plus que la première. Mais personne ne va aller mettre une
              amende au deuxième commercant, qui est pourtant bien en train de
              jeter des déchets par la fenêtre.
            </P>
            <P>
              C&apos;est une évidence, nous devons mettre un terme à cette
              situation. Et la solution est simple : les pollueurs doivent payer
              pour leur déchets, quand bien même les déchets sont des gaz à
              effet de serre.
            </P>
            <P>
              Le{' '}
              <FootNote
                title="New U.N. Climate Report Says Put a High Price on Carbon"
                url="https://www.nytimes.com/2018/10/08/climate/carbon-tax-united-nations-report-nordhaus.html"
                from="The New York Times"
                date="8 octobre 2018"
                img="/about-the-plan/newyorktimes.svg"
              >
                GIEC
              </FootNote>
              , le{' '}
              <FootNote
                title="Fiscal Monitor: How to Mitigate Climate Change"
                url="https://www.imf.org/en/Publications/FM/Issues/2019/09/12/fiscal-monitor-october-2019"
                from="FMI"
                date="Octobre 2019"
              >
                Fond Monétaire International
              </FootNote>
              , la{' '}
              <FootNote
                title="Report of the High-Level Commission on Carbon Pricing and Competitiveness"
                url="https://openknowledge.worldbank.org/handle/10986/32419"
                from="La Banque Mondiale"
                img="/about-the-plan/theworldbank.svg"
              >
                Banque Mondiale
              </FootNote>
              , la{' '}
              <FootNote
                from="Comission Européenne"
                title="Ex-post investigation of cost pass-through in the EU ETS"
                date="2015"
                url="https://ec.europa.eu/clima/sites/clima/files/ets/allowances/docs/ex-post_investigation_of_cost_en.pdf"
              >
                Commission Européenne
              </FootNote>
              , l&apos;
              <FootNote
                title="CONTRIBUTION CLIMAT-SOLIDARITÉ : POUR UNE TAXE CARBONE INTÉGRALEMENT REDISTRIBUÉE"
                url="https://presse.ademe.fr/2019/04/avis-de-lademe-contribution-climat-solidarite-pour-une-taxe-carbone-integralement-redistribuee.html"
                from="ADEME"
                date="8 avril 2019"
              >
                ADEME
              </FootNote>
              , ainsi qu&apos;
              <FootNote
                title="World Scientists’ Warning of a Climate Emergency"
                url="https://academic.oup.com/bioscience/article/70/1/8/5610806"
                from="American Institute of Biological Sciences"
                date="5 novembre 2020"
                img="/about-the-plan/americaninstituteofbiologicalsciences.svg"
              >
                11,000 chercheurs
              </FootNote>{' '}
              sont formels: la manière la plus rapide, la plus efficace et la
              plus simple de se débarasser de nos émissions est tout simplement
              de leur attribuer un prix.
            </P>
            <P>
              La bonne nouvelle ? Nous savons déjà d&apos;où les émissions
              proviennent. Lorsque nous brulons des combustibles fossiles
              (pétrole, gaz, charbon), lorsque nous élevons en masse des vaches,
              lorsque nous produisons des fertilisateurs ou du ciment. Ainsi,
              nous savons déjà à qui envoyer la facture.
            </P>

            <img
              className="block mx-auto my-8"
              src="/how-it-works/loving.svg"
            />
            <h2 className="text-lg my-6 font-bold">
              Une contribution qui ne coûte rien à la majorité
            </h2>
            <P>
              Soyons honnêtes. Si le fabricant de t-shirts avec son usine au
              pétrole doit soudainement payer pour le CO2 qu&apos;il rejette
              dans l&apos;atmosphère, il va probablement répercuter ce nouveau
              coût sur ces clients. Par conséquent, c’est vous qui finirez par
              payer !
            </P>
            <P>
              Tout comme une taxe sur le sucre rend les bonbons plus chers, une
              contribution sur le CO2 rendra plus chers les produits nuisibles
              au climat. Cela signifie que lorsque vous passez par Carrefour,
              l&apos;impact climatique des biens se reflète dans le prix. Si
              vous choisissez d&apos;acheter un concombre qui vient de Chine
              plutôt que de Provence, le coût environnemental du transport sera
              reflété dans le prix d&apos;achat.
            </P>
            <P>
              Lorsque les sucreries deviennent plus chères, nous en mangeons
              moins. Lorsque les produits ayant un impact sur le climat
              deviennent plus chers, nous en achèterons moins et
              l&apos;incitation comportementale sera de choisir des produits
              respectueux du climat. Par ailleurs, ceux-ci deviendront de plus
              en plus abordable car ils ne seront plus en compétition déloyale
              avec des produits polluants.
            </P>
            <P>
              Pour que M. et Mme Dupont ne paient pas leur mode de vie plus cher
              qu&apos;aujourd&apos;hui, nous avons recours à une astuce : tous
              les fonds collectés auprès des pollueurs sont reversés aux
              citoyens en parts égales. Oui, vous avez bien lu.
            </P>
            <P>
              Cela signifie que si vous achetez moins d&apos;articles nuisibles
              au climat que le Français moyen, vous finirez par avoir plus
              d&apos;argent en poche. Même si vous êtes milliardaire, mais que
              vous évitez de prendre l&apos;avion, que vous vivez dans un petit
              appartement et vous vous rendez au travail à vélo, vous finirez
              par être plus riche qu&apos;avant.
            </P>
            <P>
              De cette façon, nous récompensons les comportements vertueux tout
              en mettant à contribution ceux qui polluent. En fait, la plupart
              des ménages recevront plus d&apos;argent qu&apos;ils ne devront en
              dépenser pour le prix des biens polluants
            </P>

            <h2 className="text-lg my-6 font-bold">
              N&apos;interdisons pas les choses amusantes
            </h2>
            <P>
              Avec cette solution, l&apos;Etat n&apos;a pas à contraindre les
              citoyens français à ne plus jouir de leurs jouets préférés. Si un
              jour on a quand même envie de manger de la viande rouge ou prendre
              un vol Ryanair pour Tenerife ou offrir une Audi à sa famille, le
              coût environnemental sera inclus.
            </P>
            <P>
              Le prix de toutes ces choses dépendra de ce qu&apos;il en coûte
              pour polluer. Aujourd&apos;hui, le prix du CO2 est déjà
              d&apos;environ 25€ par tonne. Mais nous savons que cela coûte
              environ 1000€ d&apos;éliminer directement le CO2 de l&apos;air
              avec des machines. Heureusement, le coût par tonne de CO2 n&apos;a
              pas besoin d&apos;être aussi élevé pour voir les résultats
              souhaités, bien qu&apos;il y ait un certain désaccord sur le prix.
              Selon le Conseil économique, il devrait se situer autour de 75€
              par tonne de CO2. Cependant, des chercheurs de Stanford soulignent
              que le prix devrait être de 1 600 dollars. Ici, vous pouvez voir
              comment les différents prix de la pollution vont affecter le prix
              de certains biens communs.
            </P>
            <P>
              Le prix de la pollution ne doit pas nécessairement commencer au
              plus haut niveau. Il doit au contraire augmenter régulièrement.
              Cela permet à chacun de modifier son comportement en comprenant ce
              que l&apos;avenir lui réserve. Même les plus grands pollueurs
              devraient avoir un peu de temps pour devenir respectueux du
              climat.
            </P>
            <P>
              En fait, il est beaucoup moins coûteux de fixer un prix à la
              pollution que lorsque les politiciens choisissent des
              interdictions ou des rabais spécifiques. Lorsque vous interdisez
              des choses, il arrive souvent que seules les personnes les plus
              aisées peuvent se permettre les alternatives qui sont alors
              disponibles. Il suffit de penser à qui pourrait acheter une
              voiture si les voitures à essence étaient interdites.
            </P>

            <h2 className="text-lg my-6 font-bold">
              Une bonne affaire pour les entreprises
            </h2>
            <P>
              La révolution facile n&apos;est pas bueno si les emplois vont en
              Pologne ou en Chine. La bonne nouvelle, c&apos;est que les
              entreprises françaises vont adorer la révolution. Non seulement
              parce que c&apos;est la solution la moins chère, mais aussi parce
              qu&apos;elle leur permet de faire facilement les bons
              investissements aujourd&apos;hui, car elles savent comment les
              prix vont évoluer à l&apos;avenir. Les entreprises aiment la
              prévisibilité.
            </P>
            <P>
              Il est peu probable que les lieux de travail se déplacent vers
              Gdansk ou Shenzhen : l&apos;accord de Paris et les ambitions de
              l&apos;UE obligeront tous les pays à réduire leurs émissions à
              zéro d&apos;ici 2050. Cela signifie que les autres pays ne sont
              pas réellement intéressés par la pollution des entreprises de leur
              pays. Quel que soit l&apos;endroit où elles se déplacent, les
              entreprises sont obligées de devenir neutres sur le plan
              climatique dans un futur proche.
            </P>
            <P>
              Toutefois, certaines industries peuvent être mises en difficulté à
              court terme. Heureusement, il existe de nombreuses possibilités de
              les rendre moins compétitives grâce à la révolution facile.
            </P>
            <P>
              Un moyen raisonnable serait d&apos;ajuster légèrement le prix de
              la pollution dans certains secteurs qui, en raison de la
              concurrence, auront plus à perdre. Un autre moyen pourrait être de
              donner de l'argent aux entreprises qui vendent de nombreux biens à
              des pays où le climat n&apos;est pas encore leur principale
              préoccupation (une déduction de base), afin que leurs biens
              puissent continuer à être vendus dans d&apos;autres pays sans
              problème.
            </P>
            <P>
              Enfin et surtout, si nos propres entreprises deviennent plus
              vertes, cela signifie qu&apos;elles seront compétitives dans un
              monde qui, à l&apos;avenir, voudra acheter des produits plus
              respectueux du climat. Cela peut donc stimuler les exportations.
            </P>

            <h2 className="text-lg my-6 font-bold">
              Soutenir la révolution facile
            </h2>
            <P>
              Vous avez maintenant atteint le point où vous devez sortir votre
              doigt pour que nous puissions commencer la révolution ! Rassemblez
              toute votre anxiété climatique, tout votre zèle, suivez votre
              résolution du Nouvel An et signez la Proposition citoyenne.
            </P>
            <P>
              Quand vous aurez fini, reviens et partage avec ta grand-mère, ton
              oncle climato-sceptique et ton ami hippie. Fais le maintenant.
              Mettons en route la révolution pour que nous puissions tous nous
              asseoir et nous concentrer sur les nombreuses autres choses
              auxquelles nous préférons consacrer notre temps.
            </P>
          </FootNoteContainer>
        </div>
      </section>
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

export default ThePlan;
