import type { NextPage } from 'next';

import MainLayout from '../components/layouts/MainLayout';
import Articles from '../components/molecules/Articles/Articles';
import Features from '../components/molecules/Features/Features';
import Hero from '../components/molecules/Hero/Hero';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Articles />
    </MainLayout>
  );
};

export default Home;
