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
    "Ce serait la solution idéale si le meilleur plan climatique du monde était mis en œuvre dans le monde ou déjà dans l'UE. Quoi qu'il arrive en dehors de nos frontières, les économistes sont toujours convaincus qu'il est préférable que la France utilise le plan car c'est le moyen le moins cher et le meilleur pour atteindre nos objectifs, et nous pouvons également montrer la voie aux autres pays.",
  ],
  [
    'Avez-vous besoin de calculer la quantité de CO2 dans chaque produit ?',
    "Non. Ici, l'astuce consiste à placer la taxe le plus près possible de la source de pollution : sur les combustibles fossiles, les ruminants et les matériaux de production de polluants tels que le ciment. Lorsque le prix du CO2 est inclus dans ces produits depuis le début, la taxe passe d'un produit à l'autre en utilisant, par exemple, du pétrole, du charbon ou du ciment.",
  ],
  [
    'Faut-il éliminer toutes les taxes sur le CO2 existantes ?',
    "Vous n'êtes pas obligé de le faire! Aujourd'hui, bon nombre de nos taxes climatiques actuelles sont utilisées pour financer notre État providence et leur suppression nécessitera de trouver de nouvelles sources de revenus. Par conséquent, il est plus facile de simplement les ajouter aux impôts existants - et de laisser les politiciens réfléchir à la manière de financer le bien-être à l'avenir.",
  ],
  [
    'Les industries déjà couvertes par le système de quotas ETS devraient-elles également payer la taxe ?',
    "Ils le font, car les quotas de l'ETS sont trop bon marché pour supporter 70%. cible. Il est possible de rembourser l'équivalent du prix ETS aux industries concernées.",
  ],
  [
    "Faut-il rendre tout l'argent aux citoyens ?",
    "Idéalement, oui! L'argent est réparti de manière totalement égale entre tous les citoyens, donc que vous soyez millionnaire ou que vous ayez des prestations sociales, vous obtenez le même montant sur le compte. Pour la plupart, ce montant couvrira plus que le coût des prix plus élevés des produits carbonnés, et plus vous vivez écologique, plus votre portefeuille sera heureux. Dans d'autres pays, ils ont choisi de consacrer une part au bien-être ou à la recherche - ce n'est pas ce que les économistes recommandent.",
  ],
  [
    "Tous les emplois partiront-ils à l'étranger ?",
    "C'est très peu probable. Premièrement, de nombreux autres pays deviennent également ambitieux (et ne sont donc pas intéressés à amener des pollueurs chez eux). Parce que l'UE prévoit un tarif climatique, les pays tiers seront également ambitieux. Il existe également des possibilités d'améliorer notre compétitivité. Enfin et surtout, le meilleur plan climatique du monde signifie que nous nous occupons tous de la transition verte. De nombreuses nouvelles opportunités verront le jour à mesure que les produits verts deviendront plus compétitifs.",
  ],
  [
    "Y a-t-il d'autres pays qui l'ont déjà fait ?",
    "La Colombie-Britannique au Canada y est parvenue avec succès - et elle est maintenant déployée partout au Canada. Il est à l'ordre du jour dans plusieurs autres pays.",
  ],
  [
    "Que dit l'industrie ?",
    "Certaines grandes entreprises danoises supportent un prix de la pollution. Cela s'applique, par exemple, à Nordea, Danfoss, Vestas et Ørsted. Dansk Industri et Dansk Erhverv sont généralement opposés à des \"accusations stupides\". Ensuite, il est heureux que le meilleur plan climatique du monde soit super intelligent! Parce qu'il est moins cher sur le plan socio-économique et plus prévisible que les alternatives, il est presque normal que les entreprises, dans l'ensemble, adorent le plan. Certains vont se plaindre (en particulier les pollueurs), mais c'est plus parce que certaines de leurs entreprises ne peuvent pas vraiment être durables - et ils peuvent voir qu'il sera difficile d'être climatiquement neutre en 2050. Mais Aalborg Portland et Arla eux-mêmes devraient voir l'escroquerie - alors ils peuvent vendre plus de Futurecem et de boissons végétales respectivement",
  ],
  [
    "Combien devrait coûter l'émission de CO2 ?",
    "Pour nous débarrasser de nos émissions, le prix doit être suffisamment élevé. En 2018, le Conseil du climat a mentionné un prix de plus de 800 DKK par tonne de CO2 émise, mais c'était avant l'objectif de 70% a vu le jour. Il est probable que le prix se situera entre 1000 $ et 1500 $ d'ici 2030.",
  ],
  [
    "Comment financer l'État providence si les taxes sur les combustibles fossiles ne sont plus disponibles?",
    "En supposant que nous voulons réellement être climatiquement neutres d'ici 2050, nous n'utiliserons pas de combustibles fossiles, c'est pourquoi nous devons trouver de nouvelles sources de revenus quoi qu'il arrive. Cela n'a rien à voir avec le meilleur plan climatique du monde.",
  ],
  [
    "Est-ce à dire que je ne peux plus prendre l'avion ?",
    "Non. Cela signifie simplement que vous payez le prix réel de votre vol. Un voyage à Copenhague sera donc plus cher qu'aujourd'hui, mais si vous voulez lui donner la priorité, il y aura toujours de la place dans le budget pour les vacances annuelles pour les familles ordinaires. Dans le même temps, un prix du CO2 poussera les compagnies aériennes à accélérer le développement de carburants et d'avions respectueux du climat, ce qui rendra possible les voyages écologiques à l'avenir.",
  ],
  [
    'Ne pouvez-vous pas simplement interdire les choses à la place ?',
    "Vous pourriez, mais il y a beaucoup de choses à interdire, et quand vous interdisez les choses, cela va au-delà des plus faibles, qui souvent ne peuvent pas se permettre des alternatives. Avec le meilleur plan climatique du monde, le prix réel du produit sera utilisé - et ensuite vous décidez si vous pensez qu'un produit en vaut la peine.",
  ],
  [
    'Ne pourriez-vous pas simplement mettre une étiquette climatique sur tout et laisser les gens décider eux-mêmes de les acheter ?',
    "Ce sera un bon début, mais il est peu probable qu'il fasse une différence. Il y a une raison pour laquelle la taxe est maintenant facturée sur les cigarettes, bien qu'il y ait des images horribles sur l'emballage depuis quelques années.",
  ],
  [
    "N'est-ce pas juste une façon cachée de faire payer les citoyens ?",
    "Rendre l'argent par le biais du chèque vert n'est qu'une façon de le faire. Vous pouvez également choisir de réduire d'autres impôts ou d'augmenter l'allocation personnelle. Cependant, les montants ne seront pas particulièrement élevés pour la plupart, de sorte qu'il est peu probable qu'ils affectent le compte bancaire des citoyens d'une manière qui les dissuadera de travailler.",
  ],
  [
    'Ne pouvons-nous pas simplement soutenir les entreprises tout au long de la transition verte ?',
    "C'est possible, mais c'est une pire solution. C'est parce que l'argent provient du fonds commun (c'est-à-dire votre impôt) et parce qu'il est vraiment difficile d'en faire assez pour atteindre les 70%. Chaque année, les politiciens devraient calculer combien de CO2 ils ont économisé, puis prendre de nouvelles mesures au lieu de simplement augmenter la taxe. C'est clair - et en aucun cas assez ambitieux.",
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
              propos de la crise climatique. Vous le savez : si nous ne faisons
              pas quelque chose, rapidement, les conséquences seront
              dramatiques. Mais, comme nous tous, vous voulez continuer à
              utiliser votre voiture. Et les manifestations avec Greta Thunberg
              ne sont peut être pas votre tasse de thé.
            </P>
            <P>
              Vous voulez que la crise du climat se règle d&apos;elle même, sans
              même y penser. Vous voulez une révolution facile.
            </P>
            <P>
              Nous sommes d&apos;accord avec vous. Une solution existe, si
              simple que les politiciens n&apos;envisagent même pas d&apos;en
              parler. Cette solution permet d&apos;attribuer un coût aux
              émissions de gaz à effet de serre, mais ne fait pas peser ce coût
              sur le Français moyen et n&apos;impacte pas les emplois des
              Français.{' '}
            </P>
            <P>
              Vous pensez que ce n&apos;est pas possible ? Pourtant cette
              solution ne vient pas de nulle part.
            </P>
            <P>
              En fait, cette solution est si bien pensée que{' '}
              <FootNote
                title="Economists' Statement on Carbon Dividends"
                url="https://www.econstatement.org/"
                from="Climate Leadership Council"
                date="16. januar 2019"
              >
                27 prix Nobel ainsi que 3500 économistes la soutiennent.
              </FootNote>
            </P>
            <P>
              En plus, cela ne prends que 5 minutes pour participer à cette
              révolution. C&apos;est exactement ce qu&apos;on vous à promis. La
              transition écologique depuis votre canapé. La révolution, facile.
            </P>

            <h2 className="text-lg my-6 font-bold">Le pollueur doit payer</h2>
            <P>
              Lorsque vous jetez des déchets par la fenêtre, vous recevez dans
              la plupart des cas une amende. C&apos;est le cas parce que il ne
              faut pas que les autres aient à s&apos;occuper de vos déchets.
            </P>
            <P>
              Cependant, lorsque quelqu&apos;un pollue avec des émissions de gaz
              à effet de serre qui sont une des causes principales du
              réchauffement climatique, il n&apos;y a pas d&apos;amende ou de
              remontrances. Prenons comme exemple deux commercants qui vendent
              des T-shirts. La première entreprise possède une usine dont
              l&apos;éléctricité provient de l&apos;énergie renouvenable. La
              deuxième tire son éléctricité de pétrole. La deuxième usine pollue
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
                title="A carbon tax is ‘single most powerful’ way to combat climate change, IMF says"
                url="https://www.cnbc.com/2019/10/10/carbon-tax-most-powerful-way-to-combat-climate-change-imf.html"
                from="CNBC"
                date="10 octobre 2019"
                img="/about-the-plan/cnbc.svg"
              >
                Fond Monétaire International
              </FootNote>
              , la{' '}
              <FootNote
                title="Pricing Carbon"
                url="https://www.worldbank.org/en/programs/pricing-carbon"
                from="La Banque Mondiale"
                img="/about-the-plan/theworldbank.svg"
              >
                Banque Mondiale
              </FootNote>
              , l&apos;
              <FootNote
                title="Few countries are pricing carbon high enough to meet climate targets"
                url="http://kraka.org/small_great_nation/en_klimareform_der_sikrer_de_magiske_70_pct"
                from="Kraka"
                date="18. september 2018"
                img="/about-the-plan/kraka.svg"
              >
                OCDE
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
              Une contribution qui ne coûte rien à la plupart
            </h2>
            <P>
              Soyons honnêtes. Si le fabricant de t-shirts avec son usine au
              pétrole doit soudainement payer pour le CO2 qu&apos;il rejette
              dans l&apos;atmosphère ... Oui, l&apos;entreprise répercutera
              probablement ce nouveau coût sur ses clients, qui finiront par le
              répercuter sur vous.
            </P>
            <P>
              Tout comme une taxe sur le sucre rend les bonbons plus chers, une
              taxe sur le CO2 rendra plus chers les produits nuisibles au
              climat. Cela signifie que lorsque vous passez par Carrefour,
              l&apos;impact climatique des biens se reflète dans le prix. Vous
              n&apos;aurez donc plus besoin de vérifier si le concombre vient de
              Provence ou de Chine.
            </P>
            <P>
              Lorsque les sucreries deviennent plus chères, nous mangeons moins
              de sucreries. Lorsque les produits ayant un impact sur le climat
              deviennent plus chers, nous achetons moins de produits ayant un
              impact sur le climat et plus de produits respectueux du climat.
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
              De cette façon, nous récompensons ceux qui sont favorables au
              climat par de l&apos;argent provenant de ceux qui y sont hostiles.
              En fait, la plupart des ménages recevront plus d&apos;argent
              qu&apos;ils ne devront en dépenser pour le prix des biens
              polluants
            </P>

            <h2 className="text-lg my-6 font-bold">
              N&apos;interdisons pas les choses amusantes
            </h2>
            <P>
              Évitons que l&apos;État ne nous retire nos jouets préférés. La
              viande rouges, le vol bon marché de Ryanair pour Tenerife,
              l&apos;Audi familiale et le sac plastique Lidl. Ils devraient
              encore être disponibles, mais assurons-nous que la pollution est
              payée.
            </P>
            <P>
              Le prix de toutes ces choses dépendra de ce qu&apos;il en coûte
              pour polluer. Aujourd&apos;hui, le prix du CO2 est déjà d'environ
              25€ par tonne. Mais nous savons qu&apos;il en coûte environ 1000€
              pour éliminer le CO2 directement de l&apos;air avec des machines.
              Heureusement, le coût par tonne de CO2 n&apos;a pas d&apos;être
              aussi élevé pour voir les résultats souhaités, bien qu&apos;il y
              ait un certain désaccord sur la prix. Selon le Conseil économique,
              il devrait se situer autour de 75€ par tonne de CO2. Cependant,
              des chercheurs de Stanford soulignent que le prix devrait être de
              1 600 dollars. Ici, vous pouvez voir comment les différents prix
              de la pollution affecteront le prix de certains biens communs.
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
              des choses, il arrive souvent que seules les personnes vivant
              Paris VIème peuvent se permettre les alternatives qui sont alors
              disponibles. Il suffit de penser à qui pourrait acheter une
              voiture si les voitures à essence étaient interdites. En outre,
              les politiciens sont de misérables joueurs. Lorsqu&apos;ils
              choisissent parfois de fournir un soutien supplémentaire pour des
              articles individuels, ils finissent souvent par donner
              l&apos;argent à des choses qui étaient cool il y a des années. Ne
              faisons pas cela.
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
