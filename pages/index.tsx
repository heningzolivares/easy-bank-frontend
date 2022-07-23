import type { NextPage } from 'next';

import Features from '../components/molecules/Features/Features';
import Hero from '../components/molecules/Hero/Hero';
import Navbar from '../components/molecules/Navbar/Navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
};

export default Home;
