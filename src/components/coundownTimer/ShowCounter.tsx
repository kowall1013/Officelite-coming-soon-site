import styled from "styled-components";
import { COLORS } from "../../constant";

const List = styled.ul`
  display: flex;
  gap: 14px;
`;

type ListItemProps = {
  second?: boolean;
}

const ListItem = styled.li<ListItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ second }) => second ? COLORS.graySecond : COLORS.primaryDark};
  width: 72px;
  height: 92px;
  border-radius: 4px;

  span:nth-child(1) {
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 4.8rem;
    color: ${({ second }) => second ? COLORS.primaryBlue : COLORS.white};
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
  second?: boolean;
}

function ShowCounter({ days, hours, minutes, seconds, second }: ShowCounterProps): JSX.Element {
  return (
    <List>
      <ListItem second={second}>
        <span>{days}</span>
        <span>days</span>
      </ListItem>
      <ListItem second={second}>
        <span>{hours}</span>
        <span>hours</span>
      </ListItem>
      <ListItem second={second}>
        <span>{minutes}</span>
        <span>min</span>
      </ListItem>
      <ListItem second={second}>
        <span>{seconds}</span>
        <span>sec</span>
      </ListItem>
    </List>
  )
}

export default ShowCounter