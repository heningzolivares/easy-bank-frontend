import type { NextPage } from 'next';
import type { ReactNode } from 'react';

import Footer from '../molecules/Footer/Footer';
import Navbar from '../molecules/Navbar/Navbar';

const MainLayout = ({ children }: { children: ReactNode }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default MainLayout;
