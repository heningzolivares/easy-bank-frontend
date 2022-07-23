import { useQuery, UseQueryResult } from '@tanstack/react-query';

import instance from 'services/client';

type ArticlesResponse = {
  data: Article[];
  message?: string;
};

type Article = {
  author: string;
  content: string;
  date: string;
  id: number;
  image_url: string;
  title: string;
};

const getArticles = async (): Promise<ArticlesResponse> => {
  const { data } = await instance.get<ArticlesResponse>('articles');
  return data;
};

export default function useArticles(max: number = 0) {
  return useQuery(
    ['articles', max],
    async () => {
      const articles = await getArticles();
      const orderedArticles = articles.data.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
      if (max > 0) {
        return orderedArticles.slice(0, max);
      }
      return orderedArticles;
    },
    {
      initialData: [],
    }
  );
}
