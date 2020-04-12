import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const BehindThePlan = () => {
  return (
    <Layout>
      <SEO
        title="A propos de nous"
        description="Qui est derrière la proposition de revenu climatique"
      />
      <section className="w-full max-w-4xl mx-auto py-16 sm:pb-32 px-6">
        <div className="max-w-2xl">
          <h1 className="text-2xl font-bold mb-4">A propos de nous</h1>
          <p className="sm:text-lg leading-relaxed my-4">
            Derrière “le meilleur plan climat du monde” se trouvent{' '}
            <a
              className="underline text-green-700 hover:text-green-500"
              href="https://citizensclimatelobby.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Citizens&apos; Climate Lobby
            </a>{' '}
            et bien d&apos;autres personnes investies.
          </p>
          <p className="sm:text-lg leading-relaxed my-4">
            Cependant, le plan n&apos;est pas quelque chose que nous avons
            élaboré. L&apos;idée a été initialement soutenue par 27 lauréats du
            prix Nobel et plus de 3500 économistes, et l&apos;idée a été adaptée
            à la France, grâce à un certain nombre d&apos;économistes français.
          </p>
          <p className="sm:text-lg leading-relaxed my-4">
            Nous sommes également soutenus par des philantropes.
          </p>
          <p className="sm:text-lg leading-relaxed my-4">
            Si vous avez des questions, souhaitez soutenir ou souhaitez écrire
            sur le meilleur plan climatique du monde, vous pouvez nous
            contacter:
          </p>
          <p className="sm:text-lg leading-relaxed my-4">
            <a
              className="underline text-green-700 hover:text-green-500"
              href="mailto:lemeilleurplanclimatdumonde@gmail.com"
            >
              lemeilleurplanclimatdumonde@gmail.com
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default BehindThePlan;
