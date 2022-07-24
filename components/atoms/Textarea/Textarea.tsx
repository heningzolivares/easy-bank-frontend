import type { FC, TextareaHTMLAttributes } from 'react';

type TextareaProps = {
  label: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: FC<TextareaProps> = ({ label, id, ...rest }) => {
  return (
    <>
      <label htmlFor={id} className="text-primary font-medium  text-sm mb-1">
        {label}
      </label>
      <textarea
        rows={10}
        className="bg-white border border-gray-400 text-gray-900 text-sm rounded-md focus:ring-green-300 focus:border-green-300 block w-full p-2.5 mb-5 shadow-sm"
        {...rest}
      ></textarea>
    </>
  );
};

export default Textarea;
