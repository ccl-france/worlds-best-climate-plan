import React from 'react';
import Layout from '../components/Layout';
import FootNoteContainer, {
  FootNoteItem as FootNote,
} from '../components/FootNote';
import SEO from '../components/SEO';
import HowItWorks from '../components/HowItWorks';

const P = ({ children }) => (
  <p className="sm:text-lg leading-relaxed my-4">{children}</p>
);

const ThePlan = () => {
  return (
    <Layout>
      <SEO
        title="Le meilleur plan climat du monde"
        description="Pourquoi ce plan climat est il le meilleur du monde"
      />
      <div className="pt-16 px-8">
        <section className="mx-auto max-w-3xl">
          <HowItWorks />
        </section>
      </div>

      <hr className="mx-auto max-w-3xl" />

      <section className="w-full max-w-4xl mx-auto py-16 px-6">
        <div className="max-w-2xl">
          <FootNoteContainer>
            <h1 className="text-2xl font-bold mb-4">
              La révolution : en mode facile
            </h1>
            <P>
              Comme nous tous, vous avez probablement une légère anxiété à
              propos de la crise climatique. Vous le savez : si nous n’agissons
              pas rapidement, les conséquences seront dramatiques. Mais,
              certains d’entre vous voudront continuer à utiliser votre voiture.
              Et les manifestations avec Greta Thunberg ne sont peut être pas
              votre tasse de thé.
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
                soutiennent (cf. Climate Leadership Concil).
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
              au climat. A titre d’exemple, les biens en provenance de
              l&apos;étranger auront un coût environnemental lié au transport
              plus élevé qui se reflètera dans le prix d&apos;achat.
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
              qu&apos;aujourd&apos;hui, nous avons recours à une astuce : les
              fonds collectés auprès des pollueurs sont reversés aux citoyens.
              Oui, vous avez bien lu.
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
              La révolution facile n&apos;est pas efficace si les emplois vont
              en Pologne ou en Chine. La bonne nouvelle, c&apos;est que les
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
              Quand vous aurez fini, revenez et partagez avec votre grand-mère,
              votre oncle climato-sceptique et votre ami hippie. Faites le
              maintenant. Mettons en route la révolution pour que nous puissions
              tous nous asseoir et nous concentrer sur les nombreuses autres
              choses auxquelles nous préférons consacrer notre temps.
            </P>
          </FootNoteContainer>
        </div>
      </section>
    </Layout>
  );
};

export default ThePlan;
