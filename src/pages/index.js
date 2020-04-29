import React from 'react';

import useBreakpoint from '../hooks/useBreakpoint';
import Layout from '../components/Layout';
import Button from '../components/Button';
import FootNoteContainer from '../components/FootNote';
import SEO from '../components/SEO';
import Letter from '../components/Letter';
import HowItWorks from '../components/HowItWorks';
import MentionedIn from '../components/MentionedIn';
import ShareButtons from '../components/ShareButtons';
import SupportedBy from '../components/SupportedBy';

const Index = () => {
  const breakpoint = useBreakpoint();
  return (
    <Layout transparentMenu>
      <SEO title="Accueil" description="" />
      {/* Hero and letter */}
      <section
        className="pt-24 relative mb-64 bg-cover bg-green-900"
        style={{
          backgroundImage: 'url(../../background.png)',
          backgroundPosition: breakpoint.sm
            ? '50% -80px'
            : breakpoint.xs
            ? '50% -120px'
            : '50% -160px',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="relative mx-auto md:pt-32 p-8">
          <h1 className="text-center text-xl sm:text-2xl md:text-4xl font-bold text-sand-100 leading-none">
            Soutenez un revenu climatique socialement juste
          </h1>
          <p className="max-w-xl mx-auto text-center md:text-xl my-8 text-sand-100">
            La France se doit d&apos;imposer une contribution carbone sur les
            énergies fossiles, nuisibles au climat. Les pollueurs doivent payer,
            mais sans conséquences sociales et sans déplacer leurs émissions à
            l&apos;étranger.
          </p>

          <a
            href="https://eci.ec.europa.eu/007/public/#/initiative"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button large className="block mx-auto my-8 sm:my-16">
              Signez la
              <span className="hidden sm:inline"> proposition citoyenne</span>
              &nbsp;&nbsp;✍️
            </Button>
          </a>

          <ShareButtons />
        </div>
        {/* Letter */}
        <div className="transform -mt-64 translate-y-64">
          <Letter />
        </div>
      </section>
      {/* Sådan virker det */}
      <div className="pt-16 px-8">
        <section className="mx-auto max-w-3xl">
          <HowItWorks />
        </section>
      </div>
      <SupportedBy />
      <div className="px-8">
        <section className="mx-auto max-w-4xl pt-12">
          <MentionedIn />
        </section>
      </div>
      {/* Support form */}
      {/* <Form className="mb-16" /> */}
    </Layout>
  );
};

export default Index;
