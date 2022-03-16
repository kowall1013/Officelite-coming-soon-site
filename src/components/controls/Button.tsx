import styled from 'styled-components';
import { COLORS } from '../../constant';

type ButtonProps = {
  children: React.ReactNode
}

const StyledButton = styled.button`
  padding: 14px 41px; 
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.8rem;
  color: white;
  background-color: ${COLORS.primaryBlue};
  border: none;
  border-radius: 50px;
`;


function Button({ children }: ButtonProps): JSX.Element {
  return (
    <StyledButton>{children}</StyledButton>
  )
}

export default Button