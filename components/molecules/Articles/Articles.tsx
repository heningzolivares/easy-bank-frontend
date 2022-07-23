import Image from 'next/image';

import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Title from '../../atoms/Title/Title';

export default function Articles() {
  return (
    <section className="py-16  bg-gray-50">
      <div className="mx-pagecontainer">
        <div className="flex justify-between  mb-10">
          <Title variant="h2">Latest Articles</Title>
          <Button>+ Add New Artcle</Button>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white rounded-lg">
            <Image
              width={260}
              height={195}
              src="/bg-intro.svg"
              alt="bg intro"
              className="rounded-lg mb-6"
            />
            <div className="px-5 pt-6 pb-4 sspace-y-4">
              <Paragraph className="text-xs">By Clarie Robinson</Paragraph>
              <Title variant="h5">Receive money in any currency with no fees</Title>
              <Paragraph>
                The world is getting smaller and we’re becoming more mobile. So why should you be
                forced to only receive money in a single ...
              </Paragraph>
            </div>
          </div>
          <div className="bg-white rounded-lg">
            <Image
              width={260}
              height={195}
              src="/bg-intro.svg"
              alt="bg intro"
              className="rounded-lg mb-6"
            />
            <div className="px-5 pt-6 pb-4 sspace-y-4">
              <Paragraph className="text-xs">By Clarie Robinson</Paragraph>
              <Title variant="h5">Receive money in any currency with no fees</Title>
              <Paragraph>
                The world is getting smaller and we’re becoming more mobile. So why should you be
                forced to only receive money in a single ...
              </Paragraph>
            </div>
          </div>
          <div className="bg-white rounded-lg">
            <Image
              width={260}
              height={195}
              src="/bg-intro.svg"
              alt="bg intro"
              className="rounded-lg mb-6"
            />
            <div className="px-5 pt-6 pb-4 sspace-y-4">
              <Paragraph className="text-xs">By Clarie Robinson</Paragraph>
              <Title variant="h5">Receive money in any currency with no fees</Title>
              <Paragraph>
                The world is getting smaller and we’re becoming more mobile. So why should you be
                forced to only receive money in a single ...
              </Paragraph>
            </div>
          </div>
          <div className="bg-white rounded-lg">
            <Image
              width={260}
              height={195}
              src="/bg-intro.svg"
              alt="bg intro"
              className="rounded-lg mb-6"
            />
            <div className="px-5 pt-6 pb-4 sspace-y-4">
              <Paragraph className="text-xs">By Clarie Robinson</Paragraph>
              <Title variant="h5">Receive money in any currency with no fees</Title>
              <Paragraph>
                The world is getting smaller and we’re becoming more mobile. So why should you be
                forced to only receive money in a single ...
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
