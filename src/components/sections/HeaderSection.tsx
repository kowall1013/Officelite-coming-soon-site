import styled from 'styled-components';
import { COLORS, QUERIES } from '../../constant';
import Button from '../controls/Button';

const Section = styled.section`
  position: relative;
  display: grid;
  justify-items: center;
  padding: 0 24px 862px 24px;
  background-color: ${COLORS.ashWhite};
  overflow: hidden;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas: 
      "title title"
      "main image"
    ;
    justify-items: center;
  }
`;

const PatternWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(0px,-100px) scale(1.3);

  @media ${QUERIES.tabletAndUp} {
    transform: translate(50%,-50%) scale(0.7);
  }
`;

const LogoWrapper = styled.div`
  margin-top: 46px;
  margin-bottom: 80px;

  @media ${QUERIES.tabletAndUp} {
    grid-area: title;
    justify-self: start;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-left: 194px;
  }
`;

const IlustrationWrapper = styled.div`
  margin-bottom: 36px;

  img {
    max-width: 50%;
    margin: 0 auto;
  }

  @media ${QUERIES.tabletAndUp} {
    grid-area: image;

    img {
      max-width: 100%;
      margin: 0 auto;
    }
  }
`;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 540px;

  @media ${QUERIES.tabletAndUp} {
    grid-area: main;
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 4rem;
  line-height: 4.8rem;
  font-weight: 700;
  text-align: center;

  @media ${QUERIES.tabletAndUp} {
    text-align: left;
  }
`;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 2.6rem;
  text-align: center;
  color: ${COLORS.gray};
  margin-bottom: 24px;

  @media ${QUERIES.tabletAndUp} {
    text-align: left;
  }
`;

function HeaderSection() {
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
      <IlustrationWrapper>
        <img src="./assets/home/illustration-charts.svg" alt="" />
      </IlustrationWrapper>
      <MainWrapper>
        <Title>
          A simple solution to complex tasks is coming soon
        </Title>
        <Description>
          Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity.
        </Description>
        <Button href="registration">Get Started</Button>
      </MainWrapper>
    </Section>
  )
}

export default HeaderSection

