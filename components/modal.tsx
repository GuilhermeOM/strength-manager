'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { FaX } from 'react-icons/fa6';

interface ModalProps {
  children: JSX.Element;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type ModalWrapperClickEvent = React.MouseEvent<HTMLDivElement, MouseEvent> & {
  target: {
    id: string;
  };
};

export default function Modal({ children, isOpen, setIsOpen }: ModalProps) {
  function handleOutsideClick(event: ModalWrapperClickEvent) {
    if (event.target.id === 'wrapper') handleClose();
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key='wrapper-modal'
          id='wrapper'
          tabIndex={-1}
          aria-hidden='true'
          className='w-screen h-screen z-50 fixed inset-0 backdrop-blur-sm flex items-center justify-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleOutsideClick}
        >
          <div className='w-fit h-fit rounded-md bg-white border relative'>
            <header className='absolute right-2 top-2'>
              <button
                type='button'
                className='p-2 rounded-full hover:bg-slate-200 button-animation'
                onClick={handleClose}
              >
                <FaX size={14} />
              </button>
            </header>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
