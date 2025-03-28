import React, { useState } from "react";

const RandomNumber = () => {
    const [randomNumber, setRandomNumber] = useState(null);

    const generateRandomNumber = () => {
        const num = Math.floor(Math.random() * 100) + 1;
        setRandomNumber(num);
    };

    return (
        <div>
            <button onClick={generateRandomNumber}>Generate Random Number</button>
            {randomNumber !== null && <p>Random Number: {randomNumber}</p>}
        </div>
    );
};

export default RandomNumber;
