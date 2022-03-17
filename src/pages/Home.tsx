import styled from 'styled-components'
import CardsSection from '../components/sections/CardsSection';
import FooterSection from '../components/sections/FooterSection';
import HeaderSection from '../components/sections/HeaderSection';
import { COLORS } from '../constant';

const Wrapper = styled.div`
  background-color: ${COLORS.ashWhite};
`;

function Home(): JSX.Element {
  return (
    <Wrapper>
      <HeaderSection />
      <CardsSection />
      <FooterSection />
    </Wrapper>
  )
}

export default Home