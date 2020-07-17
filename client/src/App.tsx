import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil'

import { Square } from './components'
import { gameboardAtom, currentPlayerAtom, winnerFoundAtom } from './recoil/atoms'
import './app.css'

const App: React.FC = () => {
  const [gameboard, setGameboard] = useRecoilState(gameboardAtom);
  const [currentPlayer, setCurrentPlayer] = useRecoilState(currentPlayerAtom);
  const [winnerFound, setWinnerFound] = useRecoilState(winnerFoundAtom);

  useEffect(() => {
    checkWinner()
  }, [gameboard]);

  const checkWinner = () => {
    const winConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    winConditions.forEach((el) => {
      return (gameboard[el[0]] === gameboard[el[1]] && gameboard[el[0]] === gameboard[el[2]] && gameboard[el[0]] !== "") ?
        setWinnerFound(true)
        : winnerFound
    });
  };

  const playerClick = (i: number): void => {
    setGameboard(gameboard.map((e, index) => {
      if (index === i && e === "" && !winnerFound) {
        e = currentPlayer
        currentPlayer === "x" ? setCurrentPlayer("o") : setCurrentPlayer("x")
      }
      return e
    }));
  };

  return (
    <div className="app">
      <div className="gameboard-container">
        {gameboard.map((e, i) => <Square el={e} i={i} playerClick={playerClick} />)}
      </div>
    </div>
  );
};

export default App;
