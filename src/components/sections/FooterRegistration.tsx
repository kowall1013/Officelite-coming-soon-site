import styled from "styled-components"
import { COLORS } from "../../constant";

const Footer = styled.footer`
  height: 320px;
  background-color: ${COLORS.primaryDark};
  background-image: url('assets/sign-up/bg-pattern-side.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

function FooterRegistration(): JSX.Element {
  return (
    <Footer>FooterRegistration</Footer>
  )
}

export default FooterRegistration