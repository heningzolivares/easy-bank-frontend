import { format } from 'date-fns';

export const getDate = (date: string) => {
  return format(new Date(date), 'MM/dd/yyyy');
};
