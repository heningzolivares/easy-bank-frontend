import type { NextPage } from 'next';

import Badge from '../components/atoms/Badge/Badge';
import Button from '../components/atoms/Button/Button';
import Title from '../components/atoms/Title/Title';

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Hello</Button>
      <Title>Foo Title</Title>
      <Badge>
        <p>asd</p>
      </Badge>
    </div>
  );
};

export default Home;
