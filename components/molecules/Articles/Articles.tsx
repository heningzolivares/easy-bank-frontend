import Image from 'next/image';
import Link from 'next/link';

import useArticles from 'hooks/useArticles';

import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Title from '../../atoms/Title/Title';

export default function Articles({ isAddDisabled = false }: { isAddDisabled?: boolean }) {
  const { data: articles } = useArticles(4);
  return (
    <section className="py-16  bg-gray-50">
      <div className="mx-pagecontainer">
        <div className="flex justify-between  mb-10">
          <Title variant="h2">Latest Articles</Title>
          {!isAddDisabled && (
            <Link href="/add-article">
              <Button>+ Add New Artcle</Button>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-4 gap-6">
          {articles &&
            articles.length > 0 &&
            articles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg">
                <Image
                  width={260}
                  height={195}
                  src={article.image_url}
                  alt="bg intro"
                  className="rounded-lg mb-6"
                />
                <div className="px-5 pt-6 pb-4 sspace-y-4">
                  <Paragraph className="text-xs">{article.author}</Paragraph>
                  <Title variant="h5">{article.title}</Title>
                  <Paragraph>{article.content}</Paragraph>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
