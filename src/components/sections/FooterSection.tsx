import styled from "styled-components"
import { COLORS } from "../../constant";
import Button from "../controls/Button";
import CountDownTimer from "../coundownTimer/CountdownTimer";

const Footer = styled.footer`
  background-color: ${COLORS.secondaryDark};
  background-image: url('/assets/home/bg-pattern-footer.svg');
  background-size: cover;
  background-position: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 862px 24px 100px 24px;
`;

function FooterSection(): JSX.Element {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <Footer>
      <CountDownTimer targetDate={dateTimeAfterThreeDays} />
      <Button href="registration">Get Started</Button>
    </Footer>
  )
}

export default FooterSection