import React from 'react';

const Coin = ({ value }) => {
    return (
        <div className="coin">
            <p>${value}</p>
        </div>
    );
};

export default Coin;
