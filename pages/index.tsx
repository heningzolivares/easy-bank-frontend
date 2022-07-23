import type { NextPage } from 'next';

import Button from '../components/atoms/Buttons/Button';

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Hello</Button>
    </div>
  );
};

export default Home;
