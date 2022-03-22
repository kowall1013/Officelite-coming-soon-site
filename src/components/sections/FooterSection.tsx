import styled from "styled-components"
import { COLORS } from "../../constant";
import Button from "../controls/Button";
import CountDownTimer from "../coundownTimer/CountdownTimer";

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
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <Footer>
      <CountDownTimer targetDate={dateTimeAfterThreeDays} />
      <Button>Get Started</Button>
    </Footer>
  )
}

export default FooterSection