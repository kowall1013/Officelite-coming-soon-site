import styled from 'styled-components';
import { COLORS } from '../../constant';
import Card from './Card';

type DescriptionContent = {
  id: number;
  feature: string;
}

export type CardsContent = {
  id: number;
  plan: string;
  price: string;
  priceLabel: string;
  descriptions: DescriptionContent[],
  btn: JSX.Element;
  bgc: string;
  withBgcPattern: boolean;
  secondColor: boolean;
}

type CardsProps = {
  cards: CardsContent[]
}

const Main = styled.main`
  margin-top: 100px;
  background-color: ${COLORS.ashWhite};
  padding: 0 24px;
`;


function Cards({ cards }: CardsProps): JSX.Element {

  return (
    <Main>
      <ul>
        {cards.map(card => <Card key={card.id} card={card} />)}
      </ul>
    </Main>
  )
}

export default Cards