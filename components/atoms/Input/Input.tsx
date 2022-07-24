import type { FC, InputHTMLAttributes } from 'react';

type InputProps = {
  label: string;
  meta?: any;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ label, id, meta, type = 'text', ...rest }) => {
  return (
    <>
      <label htmlFor={id} className="text-primary font-medium  text-sm mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="bg-white border border-gray-400 text-gray-900 text-sm rounded-md focus:ring-green-300 focus:border-green-300 block w-full p-2.5 mb-5 shadow-sm"
        {...rest}
      ></input>
    </>
  );
};

export default Input;
