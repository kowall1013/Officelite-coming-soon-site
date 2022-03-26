import styled from "styled-components"
import { useFormik } from 'formik';
import { COLORS } from "../../constant";
import Input from "../controls/Input"
import Select from "../controls/Select";

const OFFERS_OPTIONS = [
  { value: 'basic', key: 'Basic Pack Free' },
  { value: 'prop', key: 'Pro Pack $9.99' },
  { value: 'unlimited', key: 'Unlimited Pack $19.99' },
]

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 24px 24px 24px;
  border-radius: 13px;
  background-color: ${COLORS.white};
  width: 327px;
`;


function Registration():JSX.Element {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      status: 'free',
      phone: '',
      company: ''
    },
    onSubmit: (values) => {
      console.log('values', values)
    }
  });

  const {
    values,
    setFieldValue,
    handleChange
  } = formik;
  return (
    <StyledForm>
      <Input
        type="text"
        placeholder="Name"
        onChange={handleChange}
        value={values.name}
      />
      <Input
        type="email"
        placeholder="Email Address"
        onChange={handleChange}
        value={values.email}
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
      />
       <Input
        type="text"
        placeholder="Company"
        onChange={handleChange}
        value={values.company}
      />
    </StyledForm>
  )
}

export default Registration