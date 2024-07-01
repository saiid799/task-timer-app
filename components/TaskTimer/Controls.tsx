import React from "react";
import { Button } from "@/components/ui/button";

interface ControlsProps {
  start: () => void;
  stop: () => void;
  reset: () => void;
  toggleMode: () => void;
  isRunning: boolean;
  isCountdown: boolean;
}

function Controls({
  start,
  stop,
  reset,
  toggleMode,
  isRunning,
  isCountdown,
}: ControlsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button onClick={start} disabled={isRunning} variant="default">
        Start
      </Button>
      <Button onClick={stop} disabled={!isRunning} variant="secondary">
        Stop
      </Button>
      <Button onClick={reset} variant="outline">
        Reset
      </Button>
      <Button
        onClick={toggleMode}
        disabled={isRunning}
        variant="outline"
        className="border-2 border-primary hover:bg-primary hover:text-primary-foreground"
      >
        {isCountdown ? "Switch to Stopwatch" : "Switch to Countdown"}
      </Button>
    </div>
  );
}

export default React.memo(Controls);
