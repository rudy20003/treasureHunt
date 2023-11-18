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
    <div class="treasure-hunt-container">
      <button className="generate-button" onClick={generateClue}>
        Generate Clue
      </button>
      <button className="verify-button" onClick={verifyTreasure}>
        Verify Treasure
      </button>
      <button className="reset-button" onClick={resetGame}>
        Reset
      </button>
      {clue && (
        <div className="clue-container">
          <p className="clue-text">Clue: {clue}</p>
          <p className={`congratulations-text ${treasureFound ? 'success' : 'hidden'}`}>
            Congratulations! Treasure found!
          </p>
        </div>
      )}
    </div>
  );
};

export default TreasureHunt;
