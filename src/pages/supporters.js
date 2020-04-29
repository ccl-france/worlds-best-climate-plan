import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Supporter from '../components/Supporter';

const supporters = [
  // ['logo', '350.svg', '', ''],
  ['logo', 'ccl.png', "Citizens' Climate Lobby", ''],
  // ['logo', 'dgs.png', '', ''],
  // ['logo', 'frej.png', '', ''],
  // ['logo', 'ungeklimaraadet.png', '', ''],
  // ['person', 'background.jpg', 'Alpha Albert', 'Økonom'],
];

const Supporters = () => {
  return (
    <Layout>
      <SEO
        title="Soutiens"
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
