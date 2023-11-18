import React, { useState } from 'react';
import './App.css'; // Import your CSS file

const TreasureHunt = () => {
  const [clue, setClue] = useState('');
  const [treasureFound, setTreasureFound] = useState(false);

  const generateClue = () => {
    const randomClue = Math.random().toString(36).substring(7);
    setClue(randomClue);
    setTreasureFound(false);
  };

  const verifyTreasure = () => {
    setTreasureFound(true);
  };

  const resetGame = () => {
    setClue('');
    setTreasureFound(false);
  };

  return (
    <div id="treasure-hunt-container">
      <button id="generate-clue-button" onClick={generateClue}>
        Generate Clue
      </button>
      <button id="verify-treasure-button" onClick={verifyTreasure}>
        Verify Treasure
      </button>
      <button id="reset-button" onClick={resetGame}>
        Reset
      </button>
      {clue && (
        <div id="clue-container">
          <p id="clue-text">Clue: {clue}</p>
          <p id="congratulations-text" className={treasureFound ? 'success' : 'hidden'}>
            Congratulations! Treasure found!
          </p>
        </div>
      )}
    </div>
  );
};

export default TreasureHunt;
