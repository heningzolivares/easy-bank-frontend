import type { FC, InputHTMLAttributes } from 'react';

type InputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ label, id, type = 'text', ...rest }) => {
  return (
    <>
      <label htmlFor={id} className="text-primary font-medium  text-sm mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5    "
        placeholder="name@flowbite.com"
        {...rest}
      ></input>
    </>
  );
};

export default Input;
