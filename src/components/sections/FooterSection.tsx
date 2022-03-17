import styled from "styled-components"
import { COLORS } from "../../constant";
import Button from "../controls/Button";
import CountDownTimer from "../coundownTimer";

const Footer = styled.footer`
  background-color: ${COLORS.secondaryDark};
  height: 300px;
`;

function FooterSection(): JSX.Element {
  return (
    <Footer>
      <CountDownTimer />
      <Button>Get Started</Button>
    </Footer>
  )
}

export default FooterSection