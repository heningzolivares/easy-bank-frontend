import type { FC } from 'react';

import useArticles, { Article } from 'hooks/useArticles';
const TableHead = () => (
  <thead className=" text-xs font-normal text-[#6B7280] uppercase bg-[#F9FAFB] ">
    <tr>
      <th scope="col" className="py-3 px-6 w-1/6">
        AUTHOR NAME
      </th>
      <th scope="col" className="py-3 px-6 w-1/4">
        TITLE
      </th>
      <th scope="col" className="py-3 px-6 w-2/5">
        CONTENT
      </th>
      <th scope="col" className="py-3 px-6 w-1/6">
        DATE
      </th>
      <th scope="col" className="py-3 px-6" />
    </tr>
  </thead>
);

const ArticleRow = ({ article }: { article: Article }) => (
  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td className="py-4 px-6 font-medium text-primary whitespace-nowrap text-sm">
      {article.author}
    </td>
    <td className="py-4 px-6 font-normal text-[#6B7280">{article.title}</td>
    <td className="py-4 px-6 font-normal text-[#6B7280">{article.content}</td>
    <td className="py-4 px-6 font-normal text-[#6B7280">{article.date}</td>

    <td className="py-4 px-6 text-right">
      <a href="#" className=" font-bold text-sm text-[#84E1A7] dark:text-[#84E1A7] hover:underline">
        Edit
      </a>
    </td>
  </tr>
);

const ArticlesTable = () => {
  const { data: articles } = useArticles();
  return (
    <div className="mt-12 mb-24">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <TableHead />

          <tbody>
            {articles &&
              articles.length > 0 &&
              articles.map((article: Article) => <ArticleRow key={article.id} article={article} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArticlesTable;
