import styled from "styled-components";
import { COLORS } from "../../constant";

const List = styled.ul`
  display: flex;
  gap: 14px;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.primaryDark};
  width: 72px;
  height: 92px;
  border-radius: 4px;

  span:nth-child(1) {
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 4.8rem;
    color: ${COLORS.white};
  }

  span:nth-child(2) {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 2.8rem;
    color: ${COLORS.gray};
  }
`;

type ShowCounterProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function ShowCounter({ days, hours, minutes, seconds }: ShowCounterProps): JSX.Element {
  return (
    <List>
      <ListItem>
        <span>{days}</span>
        <span>days</span>
      </ListItem>
      <ListItem>
        <span>{hours}</span>
        <span>hours</span>
      </ListItem>
      <ListItem>
        <span>{minutes}</span>
        <span>min</span>
      </ListItem>
      <ListItem>
        <span>{seconds}</span>
        <span>sec</span>
      </ListItem>
    </List>
  )
}

export default ShowCounter