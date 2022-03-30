import { ChangeEvent } from "react";
import styled from "styled-components"
import { COLORS } from "../../constant";

type StyledInputProps = {
  isError: boolean | unknown;
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Span = styled.span<StyledInputProps>`
  position: absolute;
  top: 50%;
  right: 8px;
  display: block;
  width: 20px;
  height: 20px;
  background-image: url(${({ isError }) => isError ? './assets/sign-up/icon-cross.svg' : 'none'});
  transform: translateY(-50%);


`;

const StyledInput = styled.input<StyledInputProps>`
  border: none;
  font-size: 1.6rem;
  line-height: 2.8rem;
  border-bottom: ${({ isError }) => isError ? `1px solid ${COLORS.red}` : `1px solid ${COLORS.gray}`};
  color: ${({ isError }) => isError ? COLORS.red: COLORS.gray};
  padding: 16px 0 16px 16px;
  outline: none;
  width: 100%;

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
  name?: string;
  isError: boolean | unknown;
}

function Input({
  type,
  placeholder,
  onChange,
  value,
  name,
  isError
}: InputProps) {
  return (
    <Wrapper>
      <StyledInput
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        isError={isError}
      />
      <Span isError={isError} />
    </Wrapper>
  )
}

export default Input