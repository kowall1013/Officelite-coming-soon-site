import { useEffect, useState } from "react";
import styled from "styled-components"
import { COLORS } from "../../constant";
import { months } from './utils';

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const TimerHeader = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 4.8rem;
  letter-spacing: 5px;
  color: ${COLORS.white};
  text-transform: uppercase;
  margin-bottom: 18px;
  text-align: center;

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


function CountDownTimer(): JSX.Element {
  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<string>('');
  const [day, setDay] = useState<number>();
  const [upcomeDate, setUpComeDate] = useState<Date>()
  const [currDate, setCurrDate] = useState<Date>()

  const DateDiff = {
    inDays: (d1: Date, d2: Date) => {
      const t2 = d2?.getTime();
      const t1 = d1?.getTime()

      console.log('t2', t2)
      console.log('t1', t1)

      return ((t2 - t1) / (24 * 3600 * 1000))
    }
  }

  useEffect(() => {

    let upcomingDate = new Date();
    let currentDate = new Date();

    upcomingDate.setDate(upcomingDate.getDate() + 47);
    upcomingDate.setHours(
      upcomingDate.getHours() + 7,
      upcomingDate.getMinutes() + 56,
      upcomingDate.getSeconds() + 14
    );

    setYear(upcomingDate.getFullYear())
    setMonth(months[upcomingDate.getMonth()])
    setDay(upcomingDate.getDate())

    setUpComeDate(upcomingDate);
    setCurrDate(currentDate);

  }, [])

  return (
    <Wrapper>
      <TimerHeader>coming <span>{day} {month} {year}</span></TimerHeader>
      <List>
        <ListItem>
          <span>{DateDiff.inDays(upcomeDate as Date, currDate as Date)}</span>
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