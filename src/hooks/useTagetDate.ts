import { useEffect, useState } from 'react';
import { months } from './../components/coundownTimer/utils';

export function useTargetDate(targetDate: number) {
  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<string>()
  const [day, setDay] = useState<number>()

  useEffect(() => {
    const targetDateCopy = new Date(targetDate)

    setYear(targetDateCopy.getFullYear())
    setMonth(months[targetDateCopy.getMonth()])
    setDay(targetDateCopy.getDate())
  }, [targetDate])

  return [day, month, year];
}


