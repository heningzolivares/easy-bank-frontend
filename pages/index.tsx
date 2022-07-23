import type { NextPage } from 'next';

import Articles from '../components/molecules/Articles/Articles';
import Features from '../components/molecules/Features/Features';
import Footer from '../components/molecules/Footer/Footer';
import Hero from '../components/molecules/Hero/Hero';
import Navbar from '../components/molecules/Navbar/Navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Articles />
      <Footer />
    </div>
  );
};

export default Home;
