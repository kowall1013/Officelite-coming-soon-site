import styled from "styled-components"
import { COLORS } from "../../constant";
import Button from "../controls/Button";
import CountDownTimer from "../coundownTimer";

const Footer = styled.footer`
  background-color: ${COLORS.secondaryDark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px;
  height: 1248px;

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