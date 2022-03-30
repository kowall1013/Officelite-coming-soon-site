import styled from 'styled-components';
import { QUERIES } from '../../constant';
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
  padding: 0 24px;
  position: absolute;
  width: 100%;
  transform: translateY(-50%);
`;

const CardsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${QUERIES.laptopAndUp} {
    flex-direction: row;
    justify-content: center;
  }
`;


function Cards({ cards }: CardsProps): JSX.Element {

  return (
    <Main>
      <CardsList>
        {cards.map(card => <Card key={card.id} card={card} />)}
      </CardsList>
    </Main>
  )
}

export default Cards