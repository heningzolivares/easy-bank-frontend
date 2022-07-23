import { useQuery } from '@tanstack/react-query';

import instance from 'services/client';

const getArticles = async () => {
  const { data } = await instance.get('articles');
  return data;
};

export default function useArticles() {
  return useQuery(['articles'], getArticles);
}
