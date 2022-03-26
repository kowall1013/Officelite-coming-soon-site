import styled from 'styled-components';
import { Link } from "react-router-dom";
import { COLORS } from '../../constant';

type ButtonProps = {
  children: React.ReactNode;
  href: string;
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


function Button({ children, href }: ButtonProps): JSX.Element {
  return (
    <Link to={href}>
      <StyledButton>
        {children}
      </StyledButton>
    </Link>
  )
}

export default Button