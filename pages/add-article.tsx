import MainLayout from 'components/layouts/MainLayout';
import Articles from 'components/molecules/Articles/Articles';
import useArticles from 'hooks/useArticles';

export default function AddArticles() {
  const { data, isLoading } = useArticles();
  if (isLoading) {
    return null;
  }
  return (
    <MainLayout>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Articles isAddDisabled />
    </MainLayout>
  );
}
