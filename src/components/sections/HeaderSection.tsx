import styled from 'styled-components';
import { COLORS } from '../../constant';
import Button from '../controls/Button';

const Section = styled.section`
  display: grid;
  justify-items: center;
`;

const LogoWrapper = styled.div`
  margin-top: 46px;
  margin-bottom: 80px;
`;

const IlustrationWrapper = styled.div`
  margin-bottom: 36px;

  img {
    max-width: 50%;
    margin: 0 auto;
  }
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
`;

function HeaderSection() {
  return (
    <Section>
      <LogoWrapper>
        <h1>
          <img src="./assets/shared/logo.svg" alt="" />
        </h1>
      </LogoWrapper>
      <IlustrationWrapper>
        <img src="./assets/home/illustration-charts.svg" alt="" />
      </IlustrationWrapper>
      <main>
        <Title>
          A simple solution to complex tasks is coming soon
        </Title>
        <Description>
          Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity.
        </Description>
        <Button>Get Started</Button>
      </main>
    </Section>
  )
}

export default HeaderSection