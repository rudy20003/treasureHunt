"use client";
const useSound = (musicName, time, volume = 0.01, loop = true) => {
  if (typeof window === "undefined") {
    return {
      play: () => {},
      pause: () => {},
    };
  }
  const sound = new Audio(`/sounds/${musicName}.mp3`);
  sound.loop = loop;
  sound.volume = volume;
  return sound;
};

export default useSound;
