import { useMutation } from '@tanstack/react-query';
import { Formik, Form, FormikHelpers, Field } from 'formik';
import { FC } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card/Card';
import Input from 'components/atoms/Input/Input';
import Loading from 'components/atoms/Loading/Loading';
import Textarea from 'components/atoms/Textarea/Textarea';
import useArticles from 'hooks/useArticles';
import useLastestArticles from 'hooks/useLastestArticles';
import instance from 'services/client';

type Values = {
  author: string;
  title: string;
  content: string;
};

const initialValues = {
  author: '',
  title: '',
  content: '',
};

const minLength = 'Must be more than 3 characters';
const requiredTxt = 'This field is required';
const articleValidatorSchema = Yup.object({
  author: Yup.string().min(3, minLength).required(requiredTxt),
  title: Yup.string().min(3, minLength).required(requiredTxt),
  content: Yup.string().min(3, minLength).required(requiredTxt),
});

const AddArticleForm: FC = () => {
  const { refetch } = useArticles();
  const { refetch: refetchLastArticles } = useLastestArticles({ max: 4 });
  const { mutate, isLoading } = useMutation(
    (values: Values) => {
      return instance.post('/articles', values);
    },
    {
      onError: (error) => alert(error),
    }
  );
  return (
    <div className="flex flex-col w-formwidth">
      <Card>
        <Formik
          initialValues={initialValues}
          onSubmit={(values: Values, { setSubmitting, resetForm }: FormikHelpers<Values>) => {
            setTimeout(() => {
              mutate(values, {
                onSuccess: () => {
                  refetch();
                  refetchLastArticles();
                  toast('Article Added!');
                  resetForm();
                },
              });
              setSubmitting(false);
            }, 500);
          }}
          validationSchema={articleValidatorSchema}
        >
          {({ isValid }) => (
            <Form>
              <div className="flex flex-col">
                <Field
                  label="Author"
                  name="author"
                  id="author"
                  autoFocus
                  as={Input}
                  disabled={isLoading}
                />
                <Field label="Blog Title" name="title" id="title" as={Input} disabled={isLoading} />
                <Field
                  label="Blog Content"
                  name="content"
                  id="content"
                  as={Textarea}
                  disabled={isLoading}
                />
                <Button className="w-full" type="submit" disabled={!isValid || isLoading}>
                  {isLoading ? <Loading /> : 'Save'}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

export default AddArticleForm;
