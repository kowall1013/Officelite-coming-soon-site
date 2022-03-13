import styled from 'styled-components';
import { COLORS } from '../../constant';

type ButtonProps = {
  children: React.ReactNode
}

const StyledButton = styled.button`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.8rem;
  color: white;
  background-color: ${COLORS.primaryBlue};
`;


function Button({ children }: ButtonProps): JSX.Element {
  return (
    <StyledButton>{children}</StyledButton>
  )
}

export default Button