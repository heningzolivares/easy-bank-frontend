import { useMutation } from '@tanstack/react-query';
import { Field, Form, useFormik } from 'formik';
import { FC, useState } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import TextButton from 'components/atoms/Button/TextButton';
import Input from 'components/atoms/Input/Input';
import useArticles, { Article } from 'hooks/useArticles';
import useLastestArticles from 'hooks/useLastestArticles';
import instance from 'services/client';
import { getDate } from 'utils/dateFormat';
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

const minLength = 'Must be more than 3 characters';
const requiredTxt = 'This field is required';
const articleValidatorSchema = Yup.object({
  author: Yup.string().min(3, minLength).required(requiredTxt),
  title: Yup.string().min(3, minLength).required(requiredTxt),
  content: Yup.string().min(3, minLength).required(requiredTxt),
});
const ArticleRow = ({ id, article }: { id: number; article: Article }) => {
  const style = id % 2 === 1 ? 'bg-[#F4F5F7]' : '';
  const [isEdit, setIsEdit] = useState(false);
  const { refetch } = useLastestArticles({ max: 4 });
  const { refetch: refetchLastArticles } = useArticles();
  const { mutate } = useMutation(
    (values: Article) => {
      return instance.put(`/articles/${values.id}`, {
        title: values.title,
        content: values.content,
        author: values.author,
      });
    },
    {
      onSuccess: () => {
        refetchLastArticles();
        refetch();
        setIsEdit(false);
        toast('Article Updated!');
      },
      onError: (error) => alert(error),
    }
  );

  const formik = useFormik({
    initialValues: article,
    validationSchema: articleValidatorSchema,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  if (isEdit) {
    return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ${style}">
        <td className="py-4 px-6 font-normal text-[#6B7280">
          {' '}
          <Input
            label="Author"
            name="author"
            id="author"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.author}
          />
        </td>
        <td className="py-4 px-6 font-normal text-[#6B7280">
          <Input
            label="Blog Title"
            name="title"
            id="title"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </td>
        <td className="py-4 px-6 font-normal text-[#6B7280">
          <Input
            label="Blog Content"
            name="content"
            onBlur={formik.handleBlur}
            id="content"
            onChange={formik.handleChange}
            value={formik.values.content}
          />
        </td>
        <td className="py-4 px-6">{getDate(article.date)}</td>
        <td className="py-4 px-6  text-right">
          <TextButton
            type="button"
            onClick={() => formik.submitForm()}
            disabled={!formik.isValid && formik.dirty}
          >
            Save
          </TextButton>
        </td>
      </tr>
    );
  }

  return (
    <tr
      className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ${style}`}
    >
      <td className="py-4 px-6 font-medium text-primary whitespace-nowrap text-sm">
        {article.author}
      </td>
      <td className="py-4 px-6 font-normal text-[#6B7280">{article.title}</td>
      <td className="py-4 px-6 font-normal text-[#6B7280">{article.content}</td>
      <td className="py-4 px-6 font-normal text-[#6B7280">{getDate(article.date)}</td>

      <td className="py-4 px-6 text-right">
        <TextButton type="button" onClick={() => setIsEdit(true)}>
          Edit
        </TextButton>
      </td>
    </tr>
  );
};

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
              articles.map((article: Article, i: number) => (
                <ArticleRow key={article.id} article={article} id={i} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArticlesTable;
