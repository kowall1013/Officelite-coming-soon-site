import Cards from '../cards/Cards';
import { cards } from './cardsData';

function CardsSection(): JSX.Element {
  return (
    <Cards cards={cards} />
  )
}

export default CardsSection