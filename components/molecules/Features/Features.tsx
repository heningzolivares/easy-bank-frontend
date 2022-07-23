import Image from 'next/image';

import Badge from '../../atoms/Badge/Badge';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Title from '../../atoms/Title/Title';

export default function Features() {
  return (
    <section className="pt-16 bg-gray-100">
      <div className="mx-pagecontainer">
        <div className="w-2/4  mb-20">
          <Title variant="h2">Why choose Easybank?</Title>
          <Paragraph className=" mt-5">
            We leverage Open Banking to turn your bank acount into your financial hub. Control your
            finances like never before.{' '}
          </Paragraph>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <Badge>
              <Image src="/icons/icon-online.svg" width={40} height={40} alt="online banking" />
            </Badge>
            <Title variant="h4" className="mt-6">
              Online Banking
            </Title>
            <Paragraph className="mt-2">
              Our modern web and mobile applications allow you to keep track of your finances
              wherever you are in the world.
            </Paragraph>
          </div>
          <div>
            <Badge>
              <Image src="/icons/icon-budgeting.svg" width={40} height={40} alt="online banking" />
            </Badge>
            <Title variant="h4" className="mt-6">
              Simple Budgeting
            </Title>
            <Paragraph className="mt-2">
              See exactly where your money goes each month. Receive notifications when you’re close
              to hitting your limits.
            </Paragraph>
          </div>
          <div>
            <Badge>
              <Image src="/icons/icon-onboarding.svg" width={40} height={40} alt="online banking" />
            </Badge>
            <Title variant="h4" className="mt-6">
              Fast Onboarding
            </Title>
            <Paragraph className="mt-2">
              We don’t do branches. Open your account in minutes online and start taking control of
              your finances right away.
            </Paragraph>
          </div>
          <div>
            <Badge>
              <Image src="/icons/icon-openapi.svg" width={40} height={40} alt="online banking" />
            </Badge>
            <Title variant="h4" className="mt-6">
              Open API
            </Title>
            <Paragraph className="mt-2">
              Manage your savings, investments, pension, and much more from one account. Tracking
              your money has never been easier.
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
}
