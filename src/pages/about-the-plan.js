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
    'Hvorfor skal Danmark have verdens bedste klimaplan?',
    'Danmarks politikere er blevet enige: Danmark skal reducere sine udledninger med 70 pct. ift. niveauet i 1990. Det kan sagtens nås, selvom det er ambitiøst. Ja, faktisk meget ambitiøst. Det eneste andet land, der er så ambitiøs er Sverige. \n\n Hvis man kigger på verdens samlede drivhusgasudledninger, så udgør Danmark kun en brøkdel. I 2014 udledte Danmark 0.27% pct af verdens samlede drivhusgasudledninger. Men hvorfor skal vi så gøre noget overhovedet? \n\n Her kommer den ubekvemme sandhed: Hvis vi kigger på vores nuværende klimaaftryk per indbygger, så er Danmark et af de slemmeste lande - og det er endnu værre, hvis vi kigger på al den historiske udledning - altså den forurening, som Danmark har været skyld i siden det industrielle gennembrud. Det giver os et ansvar for at gøre det bedre. \n\n Vi er en af de slemmeste drenge i klassen, men samtidig har vi kæmpe ambitioner om at blive bedre, og det giver os en unik mulighed. \n\n Danmark, hvis vi vælger den bedste klimaplan, kan vise hele omverdenen, at en grøn omstilling kan lade sig gøre - og dermed inspirere alle andre lande til at gøre det samme.',
  ],
  [
    'Er en pris på forurening nok til at give os 70 pct. CO2-reduktion i 2030?',
    'Nej, fordi vi har mægtig travlt. Men det kan få os langt og bedst muligt hen ad vejen. Derfor skal politikerne også investere i forskning, infrastruktur og incitamenter for at få de sidste procenter med.',
  ],
  [
    'Hvad er ulemperne? Det lyder for godt til at være sandt.',
    'Desværre er afgiften ikke nok i sig selv til at nå 70%. Derfor skal politikerne også træffe hårde beslutninger om fx. bilfrizoner, ladeinfrastruktur, bygningsreglement, olieudvinding og forskning',
  ],
  [
    'Skal løsningen ikke bruges i hele EU eller hele verden før den er effektiv?',
    'Det vil være den ideelle løsning, hvis verdens bedste klimaplan blev implementeret i hele verden eller i hele EU. Uanset hvad der sker udenfor vores grænser, er økonomerne stadigvæk overbeviste om, at det er bedst for Danmark at bruge planen, fordi det er den billigste og bedste vej for at nå vores mål, og så kan vi også vise vejen for de andre lande.',
  ],
  [
    'Skal man regne, hvor meget CO2 der er i ethvert produkt?',
    'Nope. Her består tricket i at lægge afgiften så tæt på forureningskilden som muligt; på fossile brændsler, drøvtyggere og materialerne til forurenende produktion såsom cement. Når prisen på CO2 bliver indregnet i disse produkter fra starten, vil afgiften rykke med fra produkt til produkt, der benytter sig af fx olie, kul eller cement.',
  ],
  [
    'Skal man fjerne alle eksisterende CO2-afgifter?',
    'Det behøver man faktisk ikke! Mange af vores eksisterende klimaafgifter i dag bruges til at finansiere vores velfærdsstat, og at fjerne dem vil kræve, at man finder nye indtægtskilder. Derfor er det nemmeste blot at lægge dem ovenpå de eksisterende afgifter - og lade politikerne tænke, hvordan de skal finansiere velfærden i fremtiden.',
  ],
  [
    'Skal industrier, der allerede er dækket af ETS-kvotesystemet også betale afgiften?',
    'Det skal de, da ETS-kvoterne er for billige til, at de kan støtte 70 pct. målet. Man kan eventuelt godt refundere det der svarer til ETS-prisen til de pågældende industrier.',
  ],
  [
    'Skal alle pengene gives tilbage til borgerne?',
    'Ideelt, jep! Pengene fordeles fuldstændig ligeligt mellem alle borgere, så uanset om du er millionær eller på kontanthjælp, får du det samme beløb ind på kontoen. For de fleste vil dette beløb mere end dække omkostningerne ved højere priser på sorte varer, og jo grønnere du lever, jo gladere vil din pengepung blive. I andre lande har man valgt at bruge en andel på velfærd eller forskning - det er dog ikke hvad økonomerne anbefaler.',
  ],
  [
    'Smutter alle jobs til udlandet?',
    'Det er meget usandsynligt. For det første er mange af de andre lande også ved at blive ambitiøse (og er derfor ikke interesserede i at få klimasyndere hos dem). Fordi EU har planer om en klimatold, så vil ikke-EU lande også være ambitiøse. Der findes også muligheder for at forbedre vores konkurrenceevne. Sidst men ikke mindst betyder verdens bedste klimaplan, at vi alle får travlt med den grønne omstilling. Der kommer til at opstå mange nye muligheder, fordi grønne produkter bliver mere konkurrencedygtige.',
  ],
  [
    'Er der andre lande, der har gjort det før?',
    'British Columbia i Canada har gjort det med succes - og det bliver nu udrullet i hele Canada. Det er på dagsorden i flere andre lande.',
  ],
  [
    'Hvad siger industrien?',
    'Nogle store danske virksomheder støtter en pris på forurening. Det gælder eksempelvis Nordea, Danfoss, Vestas, og Ørsted. Dansk Industri og Dansk Erhverv har generelt været imod “dumme afgifter”. Så er det heldigt, at verdens bedste klimaplan er super smart! Fordi den er billigere samfundsøkonomisk og mere forudsigelig end alternativerne, er det nærmest en selvfølge, at virksomhederne overordnet kommer til at elske planen. Nogle kommer til at brokke sig (især klimasyndere), men det er mere fordi nogle af deres forretninger ikke rigtig kan være bæredygtig - og de kan godt se at det bliver svært at være klimaneutrale i 2050. Men selve Aalborg Portland og Arla burde se fidusen i det - så kan de sælge mere af henholdsvis Futurecem og plantedrik',
  ],
  [
    'Hvor meget skal det koste at udlede CO2?',
    'For at vi skal af med vores udledninger, skal prisen være tilstrækkelig høj. Klimarådet nævnte i 2018 en pris på over 800 kroner per ton udledt CO2, men det var før målet om 70 pct. blev til. Det er sandsynligt, at prisen vil være mellem 1.000 og 1.500 kroner i 2030.',
  ],
  [
    'Hvordan finansierer vi velfærdsstaten hvis afgifterne fra fossile brændsler ikke findes længere?',
    'Hvis vi antager, at vi rent faktisk gerne vil være klimaneutrale i 2050, så kommer vi ikke til at bruge fossile brændsler, og derfor skal vi uanset hvad finde nye indtægtskilder. Det har sådan set ikke rigtigt noget med verdens bedste klimaplan at gøre.',
  ],
  [
    'Betyder det, at jeg ikke kan flyve længere?',
    'Nej. Det betyder simpelthen bare, at du betaler den reelle pris for din flyrejse. En smuttur til Paris vil derfor blive dyrere end i dag, men hvis du ønsker at prioritere det, vil der stadig være plads i budgettet til den årlige ferie for almindelige familier. Samtidig vil en pris på CO2 skubbe flyselskaberne til at få fart på udviklingen af klimavenlige brændstoffer og flyvemaskiner, som vil gøre grønne rejser mulige i fremtiden.',
  ],
  [
    'Kan man ikke bare forbyde tingene i stedet for?',
    'Det kunne man, men så er det mange ting man skal forbyde, og når man forbyder ting går det hårdere ud over de svageste, der ofte ikke har råd til alternativer. Med verdens bedste klimaplan vil varens reelle pris blive brugt - og så bestemmer man selv om man synes en vare er det værd.',
  ],
  [
    'Kunne man ikke bare ikke sætte et klimamærke på alt og lade folk selv bestemme om de vil købe dem?',
    'Det vil være en god start, men det er meget usandsynligt, at det vil gøre en forskel. Der er en grund til, at man nu sætter afgiften på cigaretter op, selvom der har være grimme billeder på indpakningen i et par år.',
  ],
  [
    'Er det ikke bare en skjult måde at lave borgerløn på?',
    'At give pengene tilbage gennem den grønne check er kun en metode at gøre det på. Man kunne også vælge at reducere andre afgifter, eller at hæve personfradraget. Beløbene vil dog ikke være særlige store for de fleste, så det er usandsynligt, at det vil påvirke borgernes bankkonto på en måde, der vil gøre at de ikke vil i arbejde.',
  ],
  [
    'Kan vi ikke bare støtte virksomhederne gennem den grønne omstilling i stedet?',
    'Det kunne man, men det er en dårligere løsning. Det er det fordi pengene kommer fra den fælles kasse (altså dine skattepenge), og fordi det er rigtig svært at gøre nok for at nå de 70 pct. Hvert år ville politikerne skulle beregne, hvor meget CO2 man har sparet, og derefter lave nye tiltag i stedet for blot at skrue op for afgiften. Det er uoverskueligt - og på ingen måde ambitiøst nok.',
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
          <h2 className="text-2xl my-6 font-bold">Spørgsmål og svar</h2>
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
