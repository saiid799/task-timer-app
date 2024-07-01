import React from "react";

interface TimerProps {
  time: number;
  isCountdown: boolean;
}

function Timer({ time, isCountdown }: TimerProps) {
  const formatTime = (t: number) => {
    const hours = Math.floor(t / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((t % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (t % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="text-6xl font-bold text-primary tabular-nums tracking-tight text-center font-body">
      {formatTime(time)}
    </div>
  );
}

export default React.memo(Timer);
