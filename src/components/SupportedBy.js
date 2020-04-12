import React from 'react';
import { Link } from 'gatsby';

const supporters = ['350.svg', 'ccl.png', 'dgs.png', 'ungeklimaraadet.png'];

const MentionedIn = () => (
  <section className="sm:mx-12 my-24 text-white px-8 py-8 sm:py-32 bg-green-800 rounded-sm">
    <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:px-8 lg:px-32">
      <div className="sm:w-1/2 sm:mr-8 lg:mr-8 xl:mr-16 text-center">
        {supporters.map(s => (
          <div className="inline-block md:w-1/2 p-2 xl:p-4" key={s}>
            <img
              className="w-40 mx-auto sm:w-full h-16 object-contain"
              src={`/supporters/${s}`}
              style={{ filter: 'invert(1)' }}
            />
          </div>
        ))}
      </div>
      <div className="sm:w-1/2 sm:ml-8 xl:ml-16 text-center sm:text-left">
        <p className="text-xl font-bold mb-4">
          Soutenu par des scientifiques, des économistes et des professionels
        </p>
        <p className="max-w-sm mx-auto sm:mx-0">
          Ce n&apos;est pas nous qui avons eu l&apos;idée d&apos;une taxe
          climatique équitable. L&apos;idée est bien pensée et soutenue par les
          scientifiques et les économistes du monde entier. Et en France, plus
          de 100 chercheurs, entreprises et organisations soutiennent
          l&apos;idée.
        </p>
        <p className="mt-4">
          <Link to="/supporters" className="underline">
            Voir nos soutiens
          </Link>
        </p>
      </div>
    </div>
  </section>
);

export default MentionedIn;
