import React from 'react';
import Helmet from 'react-helmet';
import Menu from './Menu';
import Footer from './Footer';
import ModalFormProvider from './Form/Modal';

const Layout = ({ children, transparentMenu = false }) => (
  <ModalFormProvider>
    <Helmet>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Helmet>
    <Menu transparent={transparentMenu} />
    {children}
    <Footer />
  </ModalFormProvider>
);

export default Layout;
