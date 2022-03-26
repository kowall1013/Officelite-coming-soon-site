import styled from "styled-components"
import { COLORS } from "../../constant";
import { useCountdown } from "../../hooks/useCountdown";
import { useTargetDate } from "../../hooks/useTagetDate";
import ShowCounter from "./ShowCounter";

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

type TimerHeaderProps = {
  second?: boolean;
}

const TimerHeader = styled.p<TimerHeaderProps>`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 4.8rem;
  letter-spacing: 5px;
  color: ${({ second }) => second ? COLORS.primaryDark : COLORS.white};
  text-transform: uppercase;
  margin-bottom: 18px;
  text-align: center;

  span {
    color: ${COLORS.primaryBlue};
  }
`;

type CountdownTimerProps = {
  targetDate: number;
  second?: boolean;
}

function CountdownTimer({ targetDate, second }: CountdownTimerProps): JSX.Element {
  const [days, hours, minutes, seconds] = useCountdown(targetDate)
  const [day, month, year] = useTargetDate(targetDate)

  return (
    <Wrapper>
      <TimerHeader second={second}>coming <span>{day} {month} {year}</span></TimerHeader>
      {(days + hours + minutes + seconds) <= 0 ? (
        <p>Fising</p>
      ) : (
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          second={second}
        />
      )}
    </Wrapper>
  )
}

export default CountdownTimer