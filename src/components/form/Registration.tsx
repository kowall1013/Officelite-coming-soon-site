import styled from "styled-components"
import * as yup from 'yup';
import { useFormik } from 'formik';
import { COLORS } from "../../constant";
import Input from "../controls/Input"
import Select from "../controls/Select";
import Button from "../controls/Button";

const RegistrationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email().min(6).max(255),
  phone: yup.number(),
  company: yup.string()
})

const OFFERS_OPTIONS = [
  { value: 'basic', key: 'Basic Pack Free' },
  { value: 'pro', key: 'Pro Pack $9.99' },
  { value: 'unlimited', key: 'Unlimited Pack $19.99' },
]

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 24px 24px 24px;
  border-radius: 13px;
  background-color: ${COLORS.white};
  width: 327px;

  button {
    margin-top: 40px;
  }
`;

function Registration():JSX.Element {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      status: 'basic',
      phone: '',
      company: ''
    },
    validationSchema: RegistrationSchema,
    onSubmit: (values) => {
      console.log('values', values)
    }
  });

  const {
    values,
    setFieldValue,
    handleChange,
    handleSubmit,
    errors,
    touched,
  } = formik;

  console.log('errors', errors);
  console.log('touched', touched);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Name"
        onChange={handleChange}
        value={values.name}
        name="name"
        isError={errors.name && touched.name}
      />
      <Input
        type="email"
        placeholder="Email Address"
        onChange={handleChange}
        value={values.email}
        name="email"
        isError={errors.email && touched.email}
      />
      <Select
        options={OFFERS_OPTIONS}
        selected={values.status}
        onChange={(value) => setFieldValue('status', value)}
      />
      <Input
        type="number"
        placeholder="Phone Number"
        onChange={handleChange}
        value={values.phone}
        name="phone"
        isError={errors.phone && touched.phone}
      />
       <Input
        type="text"
        placeholder="Company"
        onChange={handleChange}
        value={values.company}
        name="company"
        isError={errors.company && touched.company}
      />
      <Button type="submit" onClick={handleSubmit}>Get on the list</Button>
    </StyledForm>
  )
}

export default Registration