'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
} from 'react-icons/fa6';

function DropDiv({ children }: { children: JSX.Element }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className='ml-2 sm:mt-2 sm:ml-0 flex flex-col items-center justify-center'
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default function UserButton() {
  const [isOpen, setIsOpen] = useState(false);

  function handleButtonClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div data-testid="user-button" className='flex sm:inline-block [&_div]:mx-3 sm:[&_div]:mx-0 relative'>
      <button
        data-testid='mobile-user-button'
        className='sm:hidden px-2 py-1 inline-flex items-center justify-center gap-2 rounded-md hover:bg-slate-200 text-sm transition duration-150 ease-in-out'
        onClick={handleButtonClick}
      >
        Guilherme 👋 {!isOpen ? <FaAngleRight /> : <FaAngleLeft />}
      </button>
      <button
        data-testid='desktop-user-button'
        className='max-sm:hidden px-2 py-1 inline-flex items-center justify-center gap-2 rounded-md hover:bg-slate-200 text-sm transition duration-150 ease-in-out'
        onClick={handleButtonClick}
      >
        Guilherme 👋 {!isOpen ? <FaAngleDown /> : <FaAngleUp />}
      </button>

      {isOpen && (
        <DropDiv>
          <button className='py-1 px-2 mx-auto rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-sm text-white bg-black active:bg-stone-800 hover:bg-stone-800 transition duration-150 ease-in-out'>
            Disconnect
          </button>
        </DropDiv>
      )}
    </div>
  );
}
