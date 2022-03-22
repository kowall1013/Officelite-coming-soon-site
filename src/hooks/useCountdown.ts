import { useEffect, useState } from 'react';

export const useCountdown = (targetDate: number) => {
  const countDownTargetDate = new Date(targetDate).getTime()
  const [countDown, setCountDown] = useState(countDownTargetDate - new Date().getTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownTargetDate - new Date().getTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [countDownTargetDate])

  return howMuchTimeLeft(countDown)
}

function howMuchTimeLeft(countDown: number) {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(countDown % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const minutes = Math.floor(countDown % (1000 * 60 * 60) / (1000 * 60));
  const seconds = Math.floor(countDown % (1000 * 60) / (1000));

  return [days, hours, minutes, seconds];
}
