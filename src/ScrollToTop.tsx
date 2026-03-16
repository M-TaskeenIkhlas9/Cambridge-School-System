import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const ScrollToTop: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return <>{children}</>;
};

export default ScrollToTop;

