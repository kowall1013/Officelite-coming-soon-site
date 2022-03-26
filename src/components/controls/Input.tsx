import { ChangeEvent } from "react";
import styled from "styled-components"
import { COLORS } from "../../constant";



const StyledInput = styled.input`
  border: none;
  font-size: 1.6rem;
  line-height: 2.8rem;
  border-bottom: 1px solid ${COLORS.gray};
  padding: 16px 0 16px 16px;
  outline: none;

  &:focus {
    border-bottom-color: ${COLORS.primaryBlue};
  }

  &::placeholder {
    color: ${COLORS.gray}
  }
`;

type InputProps = {
  type: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
}

function Input({
  type,
  placeholder,
  onChange,
  value,
}: InputProps) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  )
}

export default Input