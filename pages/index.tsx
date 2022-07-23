import type { NextPage } from 'next';

import Hero from '../components/molecules/Hero/Hero';
import Navbar from '../components/molecules/Navbar/Navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
