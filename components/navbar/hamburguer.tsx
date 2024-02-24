'use client';

import { useState } from 'react';
import { FaBars, FaBarsStaggered } from 'react-icons/fa6';
import navigations from './static/navigations.json';
import Link from 'next/link';
import UserButton from './user-button';
import { AnimatePresence, motion } from 'framer-motion';

interface AnimatedDivProps {
  children: JSX.Element[];
}

function AnimatedDiv({ children }: AnimatedDivProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className='h-screen w-screen mt-4 p-4 rounded-t-xl fixed left-0 bg-[rgb(var(--background-rgb))] shadow-[0px_0px_24px_1px_#00000024]'
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default function Hamburguer() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='w-fit sm:hidden'>
      <button
        className='rounded-full p-1.5 bg-transparent'
        onClick={handleClick}
      >
        {!isOpen ? <FaBars /> : <FaBarsStaggered />}
      </button>

      {isOpen && (
        <AnimatedDiv>
          <section className='px-2 right-0 flex items-center justify-center'>
            <UserButton />
          </section>

          <nav className='mt-8'>
            <ul className='[&_li]:my-2'>
              {navigations.data.map((navigation) => (
                <li
                  key={navigation.id}
                  className='group px-2 py-1.5 first:mt-0 last:mb-0 w-full rounded-md hover:bg-slate-100 active:bg-slate-100'
                  onClick={handleClick}
                >
                  <Link
                    href={navigation.href}
                    className='w-full text-sm font-medium text-gray-500 group-hover:text-black group-active:text-black'
                  >
                    {navigation.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </AnimatedDiv>
      )}
    </div>
  );
}
