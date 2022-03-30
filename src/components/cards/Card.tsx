import styled from 'styled-components';
import { COLORS, QUERIES } from '../../constant';
import { CardsContent } from './Cards';

type CardWrapperProps = {
  bgc: string;
  withBgcPattern: boolean;
}

const CardWrapper = styled.li<CardWrapperProps>`
  background-color: ${({ bgc }) => bgc};
  background-image: url(${({ withBgcPattern }) => withBgcPattern ? './assets/home/bg-pattern-pricing.svg' : ''});
  background-position: 50% -50%;
  background-repeat: center top;
  background-size: cover;
  padding: 40px 0;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-areas: 
      "wrapper list"
      "button list"
    ;
    padding: 40px 50px;
    justify-items: flex-start;
  }

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
  }
`;

type CardTitleProps = {
  secondColor: boolean;
}

const Wrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    grid-area: wrapper
  };
`;

const CardTitle = styled.h3<CardTitleProps>`
  font-size: 2rem;
  line-height: 2.8rem;
  font-weight: 700;
  color: ${({ secondColor }) => secondColor ? COLORS.white : COLORS.primaryDark};
  margin-bottom: 40px;
`;

const CardPrice = styled.span<CardTitleProps>`
  font-size: 5.6rem;
  line-height: 6.4rem;
  font-weight: 700;
  color: ${({ secondColor }) => secondColor ? COLORS.white : COLORS.primaryDark};
  margin-bottom: 8px;
`;

const CardPriceLabel = styled.p<CardTitleProps>`
  font-size: 1.6rem;
  line-height: 2.8rem;
  margin-bottom: 56px;
  color: ${({ secondColor }) => secondColor ? COLORS.white : COLORS.primaryDark};
`;

const List = styled.ul<CardTitleProps>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin-bottom: 32px;

  li {
    color: ${({ secondColor }) => secondColor ? COLORS.white : COLORS.gray};
    font-size: 1.6rem;
    line-height: 2.8rem;
  }

  @media ${QUERIES.tabletAndUp} {
    grid-area: list;
    justify-self: center;
  };
`;

const ButtonWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    grid-area: button
  };
`;

type CardProps = {
  card: CardsContent;
}

function Card({ card }: CardProps): JSX.Element {

  const { plan, price, priceLabel, descriptions, btn, bgc, withBgcPattern, secondColor } = card;
  return (
    <CardWrapper bgc={bgc} withBgcPattern={withBgcPattern} >
      <Wrapper>
        <CardTitle secondColor={secondColor}>{plan}</CardTitle>
        <CardPrice secondColor={secondColor}>{price}</CardPrice>
        <CardPriceLabel secondColor={secondColor}>{priceLabel}</CardPriceLabel>
      </Wrapper>
      <List secondColor={secondColor}>
        {descriptions.map(dsc => <li key={dsc.id}>{dsc.feature}</li>)}
      </List>
      <ButtonWrapper>
        {btn}
      </ButtonWrapper>
    </CardWrapper>
  )
}

export default Card
