import React, { useState } from 'react'
import '../style/header.css'
const Header = () => {

  const [isRulesVisible,setIsRulesVisible]= useState(false);

  const toggleRulesVisibility = () => {
    setIsRulesVisible(!isRulesVisible);
  }
  return (
    <>
      <header className="h-12 flex items-center justify-between text-white py-3 text-base bg-blackbg border-b-[1.5px] border-">
        <div>WORD GESS</div>

        <menu className="w-1/2 flex items-center justify-center">
          <div
            onClick={toggleRulesVisibility}
            className="h-8 w-20 bg-blackbg my-1 flex items-center justify-center cursor-pointer border-[1.3px] border-white rounded-xl"
          >
            Rules
          </div>
        </menu>
      </header>

      {/* Render rules overlay conditionally */}
      {isRulesVisible && (
        <div className="rules-overlay fixed inset-0 bg-opacity-[50%] bg-black flex items-center justify-center z-50" onClick={() => setIsRulesVisible(false)}>
          <div
            className="rules-container bg-blackbg max-w-[600px] w-full text-white text-left p-10"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <h2 className="text-4xl font-bold mb-2 pb-4">Game Rules:</h2>
            <ul className="list-disc pl-5 text-lg ">
              <li className='mb-1 py-2'>Guess the word in 6 attempts</li>
              <li className='mb-1 py-2'>Each guess must be a valid 5-letter word</li>
              <li className='mb-1 py-2'>After each guess, colors will indicate if letters are correct, misplaced, or incorrect</li>
            </ul>
            <p className='text-lg font-bold pb-3'>Example:</p>
            <div className='tile bg-correct'>G</div>
            <p className='pb-4 pt-1'>G is in the word and at correct position</p>
            <div className='tile bg-misplaced'>E</div>
            <p className='pb-4 pt-1'>Signify alphabet is in the word and at correct position</p>
            <div className='tile bg-incorrect'>S</div>
            <p className='pb-4 pt-1'>Signify alphabet is in the word and at correct position</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
