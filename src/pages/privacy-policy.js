import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const P = ({ children }) => (
  <p className="my-4 leading-loose text-gray-800">{children}</p>
);

const SubHeader = ({ children }) => (
  <h2 className="text-lg my-3 font-bold">{children}</h2>
);

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEO title="Cookies et politique de confidentialité" description="" />
      <section className="w-full max-w-xl mx-auto py-16 px-6">
        <h1 className="text-2xl my-6 font-bold">
          Cookies et politique de confidentialité
        </h1>
        <SubHeader>
          Nous ne collectons aucune donnée ! Hooray for privacy !
        </SubHeader>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
