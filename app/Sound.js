import React, { useEffect } from 'react';
import start from '/sounds/initialMusic.wav';
import playing from '/sounds/backGroundMusic.mp4';  
import x from  '@/app/sounds/last.mp4'; 
const Sound = ({ level }) => {
  useEffect(() => {
    

    const playInitialMusic = () => {
        
      const initialMusic = new Audio('/sounds/initialMusic.wav');
      initialMusic.play();

      setTimeout(() => {
        initialMusic.pause();
      }, 2 * 60 * 1000); 
    };

    
    const playBackgroundMusic = () => {
      const backgroundMusic = new Audio('/sounds/backGroundMusic.wav');
      backgroundMusic.play();
    };

   
    const playFinalMusic = () => {
      const finalMusic = new Audio(x);
      finalMusic.play();
    };

    
    if (level === 'start') {
      playInitialMusic();
    } else if (level === 'playing') {
      playBackgroundMusic();
    } else if (level === 'end') {
      playFinalMusic();
    }

    return () => {
      
      initialMusic.pause();
      backgroundMusic.pause();
      finalMusic.pause();
    };
  }, [level]);

  //  game  logic

  return (
    <div>
      <audio src='/sounds/initialMusic.wav' />
      <audio src='/sounds/backGroundMusic.wav' />
      <audio src='x' />
    
    </div>
  );
};

export default Sound;
