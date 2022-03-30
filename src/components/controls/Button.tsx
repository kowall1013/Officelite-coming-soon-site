import styled from 'styled-components';
import { Link } from "react-router-dom";
import { COLORS } from '../../constant';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
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
  width: 100%;
`;


function Button({ children, href, onClick, type }: ButtonProps): JSX.Element {
  return (
    <Link to={href || ''}>
      <StyledButton onClick={onClick} type={type}>
        {children}
      </StyledButton>
    </Link>
  )
}

export default Button