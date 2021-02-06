import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Supporter from '../components/Supporter';

const supporters = [
  ['logo', 'saving-our-planet.jpg', 'Saving our Planet', ''],
  ['logo', 'ccl.png', "Citizens' Climate Lobby", ''],
  ['logo', 'citoyens-pour-climat.png', 'Citoyens pour le climat', ''],
  ['logo', 'reseau-action-climat.svg', 'Réseau action climat', ''],
  // ['person', 'background.jpg', 'Alpha Albert', 'Økonom'],
];

const Supporters = () => {
  return (
    <Layout>
      <SEO
        title="Ils nous soutiennent"
        description="Découvrez qui soutient le meilleur plan climat du monde"
      />
      <section className="w-full max-w-4xl mx-auto py-16 sm:pb-32 px-6">
        <div className="max-w-2xl">
          <h1 className="text-2xl font-bold mb-4">Soutiens</h1>
          <p className="sm:text-lg leading-relaxed mb-12">
            Cette idée bien pensée de fiscalité climatique équitable n&apos;a
            pas été pensée par nous. Elle est déjà soutenu par des
            scientifiques, chercheurs, et économistes du monde entier. En
            France, plus de 100 chercheurs, entreprises, et organisations
            soutiennent cette idée.
          </p>
          <h2 className="text-2x1 font-bold mb-4">Experts</h2>
          <p className="leading-relaxed mb-12">
            A rédiger...
            {/* TODO */}
          </p>
          <h2 className="text-2x1 font-bold mb-4">Citoyens</h2>
          <p className="leading-relaxed mb-12">
            A rédiger...
            {/* TODO */}
          </p>
          <h2 className="text-2x1 font-bold mb-4">Associations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {supporters.map(([type, image, name, title], i) => (
              <Supporter
                key={i}
                type={type}
                image={image}
                name={name}
                title={title}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Supporters;
