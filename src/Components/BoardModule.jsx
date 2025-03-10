import React, { useEffect, useState, useRef } from 'react';
import '../style/boardStyle.css';
import KeyboardModule from './KeyboardModule.jsx';

import { validateGuess, checkVictory } from '../utility/gameLogic.js';// import logic
import {RandomWord} from '../utility/words.js' //for random word generation

// set the initial board with empty tiles
const BoardModule = () => {
  const [board, setBoard] = useState(
    Array(6)
      .fill()
      .map(() => Array(5).fill(' '))
  );

  const [currentRow, setCurrentRow] = useState(0);// set current row
  const [currentCol, setCurrentCol] = useState(0);// set current column

  const [keyboardColors, setKeyboardColors] = useState({});

// sets the background color of tiles
const [validationResult, setValidationResult] = useState(
  Array(6)
    .fill()
    .map(() => Array(5).fill(' '))
);

const targetWord = useRef(RandomWord());
  console.log(targetWord);

// to change bg of tile
const getTileColor = (rowIndex, colIndex) => {
  const result = validationResult[rowIndex][colIndex];
  if (result === 'correct') {
    return 'bg-green-500';
  } else if (result === 'misplaced') {
    return 'bg-yellow-500';
  } else if (result === 'incorrect') {
    return 'bg-gray-500';
  } else {
    return 'bg-blackbg';
  }
};

// to input from physical keyboard
  const handleKeyDown = (event) => {
    const key = event.key;
    setBoard((prevBoard) => {
      const newBoard = prevBoard.map((row) => [...row]);
      let newCol = currentCol; // Track the updated column pointer locally
  
      if (key === 'Backspace' && currentCol > 0) {
        newBoard[currentRow][currentCol - 1] = ' ';
        newCol = currentCol - 1;
      } else if (/^[A-Za-z]$/.test(key) && currentCol < 5) {
        newBoard[currentRow][currentCol] = key.toUpperCase();
        newCol = currentCol + 1;
      }

      if(key === 'Enter' && currentCol===5 ) {
        handleSubmit();
      }
  
      // Update the column pointer synchronously
      setCurrentCol(newCol);
  
      return newBoard;
    });
  };
  
  const handleKeyPress = (key) =>{
    console.log(key);
    setBoard((prevBoard) => {
      const newBoard = prevBoard.map((row) => [...row]);
      let newCol = currentCol; // Track the updated column pointer locally
  
      if (key === 'Backspace' && currentCol > 0) {
        newBoard[currentRow][currentCol - 1] = ' ';
        newCol = currentCol - 1;
      } else if (/^[A-Za-z]$/.test(key) && currentCol < 5) {
        newBoard[currentRow][currentCol] = key.toUpperCase();
        newCol = currentCol + 1;
      }

      if(key === 'Enter' && currentCol===5 ) {
        handleSubmit();
      }
  
      // Update the column pointer synchronously
      setCurrentCol(newCol);
  
      return newBoard;
    });
  }


// handle submission
  const handleSubmit = () => {
    setBoard((prevBoard) => {
      // Validate current row completion
      if (currentCol < 5) {
        alert('Complete the row before submitting.');
        return prevBoard; // No state change
      }
  
      // Creating a copy of the board (not modifying it directly)
      const newBoard = prevBoard.map((row) => [...row]);
  
      // Get the guess and check its validity
      const guess = newBoard[currentRow].join('');
      console.log('Guess:', guess);
      console.log('Target Word:', targetWord);
  
      const result = validateGuess(targetWord.current, guess);
      console.log('Result:', result);
  
      const gameStatus = checkVictory(result, currentRow);
      console.log('Game Status:', gameStatus);

      setKeyboardColors((prevColors) => {
        const newColors = { ...prevColors };
        guess.split('').forEach((char, index) => {
          const upperChar = char.toUpperCase(); // Ensure uppercase comparison
          if (result[index] === 'correct') {
            newColors[upperChar] = 'bg-correct';
          } else if (result[index] === 'misplaced' && newColors[upperChar] !== 'bg-green-500') {
            newColors[upperChar] = 'bg-misplaced';
          } else if (!newColors[upperChar]) {
            newColors[upperChar] = 'bg-incorrect';
          }
        });
        return newColors;
      });
      

      //change tile color
      setValidationResult((prevResult) => {
        const newResult = prevResult.map((row) => [...row]);
        result.forEach((res, index) => {
          newResult[currentRow][index] = res;
        });
        return newResult;
      });
      // check if player won/lost
      if (gameStatus === 'won') {
        alert('Congratulations! You won the game!');
        // Reset func goes here
        return newBoard; // Stop further updates after winning
      } else if (gameStatus === 'lost') {
        alert('Sorry, you lost the game!');
        // Reset func goes here
        return newBoard; // Stop further updates after losing
      }
  
      // Proceed to the next row if game is not won/lost
      if (currentRow < 5) {
        setCurrentRow((prevRow) => prevRow + 1);
        setCurrentCol(0);
      } else {
        alert('You have reached the last row!');
      }
  
      return newBoard; // Return the updated board state
    });
  };
  
  

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentRow, currentCol]);
// for debugging purposes
  useEffect(() => {
    console.log('Current Row:', currentRow, 'Current Col:', currentCol);
    console.log('Board State:', board);
  }, [board, currentRow, currentCol]);

  return (
    <main className=''>
      <div className='w-full h-11 absolute bg-transparent flex items-center justify-center'>
        <div className='w-auto h-10 bg-black text-white '></div>
      </div>
      <div
        className="board-module"
        tabIndex={0}
        style={{ outline: 'none' }}
      >
        
        <div className="board">
          {board.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="row bg-blackbg w-[320px] h-[52.5px] flex justify-center items-center mx-[10px] my-[5px]"
            >
              {row.map((char, colIndex) => (
                <div
                  key={colIndex}
                  className={`tile h-full w-[52.5px] mx-[2px] border-[2px] border-borderColor text-white text-4xl font-bold font-sans flex items-center justify-center pb-2 rounded-sm ${getTileColor(rowIndex, colIndex)}`}
                >
                  {char}
                </div>
              ))}
            </div>
          ))}
        </div>
        
      </div>
      
      <div className='w-full flex items-center justify-center'>
        <KeyboardModule onKeyPress={handleKeyPress}  keyboardColors={keyboardColors}/>
      </div>
      <div className='w-full h-10 flex items-center justify-center'>
        <button className='w-1/5 h-12 bg-key_bg rounded-lg font-bold text-2xl text-slate-200 border-2 border-green-500' >RESET</button>
      </div>
    </main>
  );
};

export default BoardModule;
