import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Title from 'components/atoms/Title/Title';
import MainLayout from 'components/layouts/MainLayout';
import AddArticleForm from 'components/molecules/AddArticleForm/AddArticleForm';
import Articles from 'components/molecules/Articles/Articles';
import ArticlesTable from 'components/molecules/ArticlesTable/ArticlesTable';
import useArticles from 'hooks/useArticles';

export default function AddArticles() {
  const { isLoading, refetch } = useArticles();
  if (isLoading) {
    return null;
  }
  return (
    <MainLayout>
      <section className="flex flex-col bg-gray-200">
        <div className="mx-pagecontainer pt-16 pb-28">
          <Title variant="h2">Add new blog title</Title>
          <Paragraph>Publish a new blog article to feature in the Easybank homepage.</Paragraph>
          <div className="flex justify-center my-16">
            <AddArticleForm />
          </div>

          <Title variant="h2">Previous Articles</Title>
          <Paragraph>Review and edit previous blog posts published on to the homepage. </Paragraph>
          <ArticlesTable onRefresh={() => refetch()} />
        </div>
      </section>
      <Articles isAddDisabled />
    </MainLayout>
  );
}
