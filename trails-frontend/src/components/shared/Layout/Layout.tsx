import React from 'react'
import Header from 'src/components/shared/Appbar/Appbar';
import Footer from 'src/components/shared/Footer/Footer';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

