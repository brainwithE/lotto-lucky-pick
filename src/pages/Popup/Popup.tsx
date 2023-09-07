import React, { useState } from 'react';
import './Popup.css';

const Popup: React.FC = () => {
  const [luckyDigits, setLuckyDigits] = useState<number[]>([]);

  const getRandomDigit = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const pickLuckyDigits = (): void => {
    const digits = new Set<number>();

    while (digits.size < 6) {
      const randomNumber = getRandomDigit(1, 55);
      digits.add(randomNumber);
    }

    setLuckyDigits(Array.from(digits));
  };

  return (
    <div className="App">
      <header className="text-white">
        <h1 className="text-xl font-bold">Lotto Lucky Picker</h1>
        <p>Generate your lucky number that will change your life forever.</p>
      </header>
      <div className="flex flex-row justify-between py-10">
        {luckyDigits?.map((digits) => (
          <div className="bg-amber-500 text-amber-50 drop-shadow-md font-semibold shadow h-8 w-8 text-center m-auto flex justify-center items-center rounded-full">
            {digits}
          </div>
        ))}
      </div>
      <button className="bg-green-300 px-4 py-2" onClick={pickLuckyDigits}>
        Pick your lucky number
      </button>
    </div>
  );
};

export default Popup;
