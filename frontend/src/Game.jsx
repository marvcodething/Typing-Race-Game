import React from 'react';
import { useParams } from 'react-router-dom';

function Game() {
  const { gameCode } = useParams();

  return (
    <div>
      <h1>Game Room: {gameCode}</h1>
      {/* Add your game logic here */}
    </div>
  );
}

export default Game;