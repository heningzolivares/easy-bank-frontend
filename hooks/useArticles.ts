import { useQuery, UseQueryResult } from '@tanstack/react-query';

import instance from 'services/client';

type ArticlesResponse = {
  data: Article[];
  message?: string;
};

export type Article = {
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

export default function useArticles() {
  return useQuery(
    ['articles', 'all'],
    async () => {
      const articles = await getArticles();
      const orderedArticles = articles.data.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

      return orderedArticles;
    },
    {
      initialData: [],
    }
  );
}
