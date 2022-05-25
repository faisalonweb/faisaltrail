import React from 'react'
import { useLocation } from "react-router-dom";
import Header from 'src/components/shared/Appbar/Appbar';
import Footer from 'src/components/shared/Footer/Footer';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const { pathname } = useLocation();
  return (
    <>
     {
        pathname !== '/login' && pathname !== "/signup" ? (
          <>
           <Header />
            {children}
           <Footer />
          </>
        ):(
          <>
          {children}
          </>
        )
      }
    </>
  );
}

