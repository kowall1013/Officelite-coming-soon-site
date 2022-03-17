import styled from "styled-components"
import { COLORS } from "../../constant";

const Wrapper = styled.div``;

const TimerHeader = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 4.8rem;
  letter-spacing: 5px;
  color: ${COLORS.white};
  text-transform: uppercase;
  margin-bottom: 18px;

  span {
    color: ${COLORS.primaryBlue};
  }
`;

const List = styled.ul`
  display: flex;
  gap: 14px;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.primaryDark};

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


function CountDownTimer(): JSX.Element {
  return (
    <Wrapper>
      <TimerHeader>coming <span>4 NOV 2020</span></TimerHeader>
      <List>
        <ListItem>
          <span>47</span>
          <span>days</span>
        </ListItem>
        <ListItem>
          <span>07</span>
          <span>hours</span>
        </ListItem>
        <ListItem>
          <span>56</span>
          <span>min</span>
        </ListItem>
        <ListItem>
          <span>14</span>
          <span>sec</span>
        </ListItem>
      </List>
    </Wrapper>
  )
}

export default CountDownTimer