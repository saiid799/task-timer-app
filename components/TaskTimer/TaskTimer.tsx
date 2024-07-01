"use client";

import React, { useState, useCallback, useMemo, useEffect } from "react";
import Timer from "./Timer";
import Controls from "./Controls";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { playSound, START_SOUND, FINISH_SOUND } from "@/utils/sound";

export default function TaskTimer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isCountdown, setIsCountdown] = useState(false);
  const [selectedTime, setSelectedTime] = useState(300); // 5 minutes default
  const [volume, setVolume] = useState(0.5);

  const start = useCallback(() => {
    setIsRunning(true);
    playSound(START_SOUND, volume);
  }, [volume]);

  const stop = useCallback(() => setIsRunning(false), []);

  const reset = useCallback(() => {
    setIsRunning(false);
    setTime(isCountdown ? selectedTime : 0);
  }, [isCountdown, selectedTime]);

  const toggleMode = useCallback(() => {
    setIsCountdown(!isCountdown);
    setTime(isCountdown ? 0 : selectedTime);
  }, [isCountdown, selectedTime]);

  const handleTimeSelect = useCallback(
    (value: string) => {
      const newTime = parseInt(value, 10);
      setSelectedTime(newTime);
      if (isCountdown) {
        setTime(newTime);
      }
    },
    [isCountdown]
  );

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          if (isCountdown) {
            if (prevTime <= 1) {
              setIsRunning(false);
              playSound(FINISH_SOUND, volume);
              return 0;
            }
            return prevTime - 1;
          } else {
            return prevTime + 1;
          }
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, isCountdown, volume]);

  const controlsProps = useMemo(
    () => ({
      start,
      stop,
      reset,
      isRunning,
      toggleMode,
      isCountdown,
    }),
    [start, stop, reset, isRunning, toggleMode, isCountdown]
  );

  return (
    <Card className="w-full max-w-md bg-card shadow-lg">
      <CardContent className="p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center text-primary">
          Task Timer
        </h2>
        <Timer time={time} isCountdown={isCountdown} />
        <Controls {...controlsProps} />
        <div className="w-full">
          <label
            htmlFor="timeSelect"
            className="block text-sm font-medium text-muted-foreground mb-2"
          >
            Select countdown time:
          </label>
          <Select
            onValueChange={handleTimeSelect}
            value={selectedTime.toString()}
            disabled={isRunning}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="300">5 minutes</SelectItem>
              <SelectItem value="600">10 minutes</SelectItem>
              <SelectItem value="900">15 minutes</SelectItem>
              <SelectItem value="1800">30 minutes</SelectItem>
              <SelectItem value="3600">1 hour</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full mt-4">
          <label
            htmlFor="volumeControl"
            className="block text-sm font-medium text-muted-foreground mb-2"
          >
            Sound Volume:
          </label>
          <Slider
            id="volumeControl"
            min={0}
            max={1}
            step={0.1}
            value={[volume]}
            onValueChange={(value) => setVolume(value[0])}
          />
        </div>
      </CardContent>
    </Card>
  );
}
