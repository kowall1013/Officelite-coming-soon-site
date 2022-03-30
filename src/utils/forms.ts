import { getIn, FormikErrors } from 'formik';

type FormValues = {
  name: string;
  email: string;
  status: string;
  phone?: number;
  company?: string;
}

export function hasErrors(name: string, errors: FormikErrors<FormValues>, touched: FormValues) {
  const error = getIn(errors, name);
  const touch = getIn(touched, name)
  return error && touch;
}
