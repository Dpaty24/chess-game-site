import React, { useState } from 'react';
import Board from './Board';
import calculateCoins from '../utils/calculateCoins';

const Game = ({ user }) => {
    const [opponent, setOpponent] = useState(null);
    const [winner, setWinner] = useState(null);

    const handleRandomOpponent = () => {
        const randomOpponent = { username: 'RandomOpponent', coins: 100 };
        setOpponent(randomOpponent);
    };

    const handleGameEnd = (winner) => {
        const prize = calculateCoins(10); // Example with $10 bet
        winner.coins += prize;
        if (winner.username === user.username) {
            user.coins += prize;
        } else {
            user.coins -= prize;
        }
        setWinner(winner);
    };

    return (
        <div className="game">
            <Board />
            <button onClick={handleRandomOpponent}>Random Opponent</button>
            {opponent && <p>Opponent: {opponent.username}</p>}
            {winner && <p>Winner: {winner.username}</p>}
        </div>
    );
};

export default Game;
