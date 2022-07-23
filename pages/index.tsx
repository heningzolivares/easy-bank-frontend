import type { NextPage } from 'next';

import Badge from '../components/atoms/Badge/Badge';
import Button from '../components/atoms/Button/Button';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
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
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit deserunt numquam quae,
        aperiam ipsa porro debitis voluptas dignissimos laboriosam, earum laudantium quisquam soluta
        atque exercitationem molestiae odio a quos. Rem!
      </Paragraph>
    </div>
  );
};

export default Home;
