import { useEffect, useRef, useState } from "react";

export default function MutableRef() {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef<number | undefined>(null);
  function stopTimer() {
    if(timerRef.current)clearInterval(timerRef.current);
  }
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer((newTimer) => newTimer + 1);
    }, 1000);

    return () => stopTimer();
  }, []);
  return (
    <div>
      <h1>{timer}</h1>
      <button type="button" onClick={() => stopTimer()}>
        Stop Timer
      </button>
    </div>
  );
}
