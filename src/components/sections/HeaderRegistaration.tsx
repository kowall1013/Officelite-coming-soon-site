import styled from 'styled-components';
import { COLORS } from '../../constant';
import CountdownTimer from '../coundownTimer/CountdownTimer';
import Registration from '../form/Registration';

const Section = styled.section`
  position: relative;
  display: grid;
  justify-items: center;
  padding: 0 24px;
  background-color: ${COLORS.ashWhite};
`;

const PatternWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-100px) scale(1.3);
`;

const LogoWrapper = styled.div`
  margin-top: 46px;
  margin-bottom: 80px;
`;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 4rem;
  line-height: 4.8rem;
  font-weight: 700;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 2.6rem;
  text-align: center;
  color: ${COLORS.gray};
  margin-bottom: 24px;
`;

function HeaderRegistaration(): JSX.Element {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <Section>
      <PatternWrapper>
        <img src="./assets/home/bg-pattern-header.svg" alt="" />
      </PatternWrapper>
      <LogoWrapper>
        <h1>
          <img src="./assets/shared/logo.svg" alt="" />
        </h1>
      </LogoWrapper>
      <MainWrapper>
        <Title>
          Work smarter. Save time.
        </Title>
        <Description>
          Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon.
        </Description>
      </MainWrapper>
      <CountdownTimer second targetDate={dateTimeAfterThreeDays} />
      <Registration />
    </Section>
  )
}

export default HeaderRegistaration