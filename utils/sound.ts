export const START_SOUND = "/start.mp3";
export const FINISH_SOUND = "/finish.mp3";

export const playSound = (soundFile: string, volume: number) => {
  const audio = new Audio(soundFile);
  audio.volume = volume;
  audio.play().catch((error) => console.error("Error playing sound:", error));
};
