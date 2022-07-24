import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Title from 'components/atoms/Title/Title';
import MainLayout from 'components/layouts/MainLayout';
import AddArticleForm from 'components/molecules/AddArticleForm/AddArticleForm';
import Articles from 'components/molecules/Articles/Articles';
import useArticles from 'hooks/useArticles';

export default function AddArticles() {
  const { data, isLoading } = useArticles();
  if (isLoading) {
    return null;
  }
  return (
    <MainLayout>
      <section className="flex flex-col bg-gray-200">
        <div className="mx-pagecontainer pt-16 pb-28">
          <Title variant="h2">Add new blog title</Title>
          <Paragraph>Publish a new blog article to feature in the Easybank homepage.</Paragraph>
        </div>
        <div className="flex justify-center">
          <AddArticleForm />
        </div>
      </section>
      <Articles isAddDisabled />
    </MainLayout>
  );
}
