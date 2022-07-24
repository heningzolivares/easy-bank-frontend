import type { FC, ReactNode } from 'react';

import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card/Card';
import Input from 'components/atoms/Input/Input';
import Textarea from 'components/atoms/Textarea/Textarea';

const AddArticleForm: FC = () => {
  return (
    <div className="flex flex-col w-formwidth">
      <Card>
        <form>
          <div className="flex flex-col">
            <Input label="Author" name="author" id="author" autoFocus />
            <Input label="Blog Title" name="blogTitle" id="blogTitle" />
            <Textarea label="Blog Content" name="blogContent" id="blogContent" />
            <Button className="w-full" type="submit">
              Save
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddArticleForm;
