import React from 'react';

const Board = () => {
    const renderSquare = (i) => {
        const lightSquare = (Math.floor(i / 8) + i) % 2 === 0;
        return (
            <div
                key={i}
                className={`square ${lightSquare ? 'light' : 'dark'}`}
            />
        );
    };

    const squares = Array(64).fill(null).map((_, i) => renderSquare(i));

    return (
        <div className="board">
            {squares}
        </div>
    );
};

export default Board;
