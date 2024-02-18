'use client';

import { useState } from 'react';
import { FaBars, FaBarsStaggered } from 'react-icons/fa6';
import navigations from './static/navigations.json';
import Link from 'next/link';
import UserButton from './UserButton';

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
        <div className='h-screen w-screen mt-4 p-4 rounded-t-xl fixed left-0 bg-[var(--background-rgb)] shadow-[0px_0px_24px_1px_#00000024]'>
          <section className='px-2 right-0 flex items-center justify-center'>
            <UserButton />
          </section>

          <nav className='mt-8'>
            <ul className='[&_li]:my-2'>
              {navigations.data.map((navigation) => (
                <li
                  key={navigation.id}
                  className='px-2 py-1.5 rounded-md first:mt-0 last:mb-0 w-full active:bg-slate-100'
                  onClick={handleClick}
                >
                  <Link
                    href={navigation.href}
                    className='text-sm font-semibold'
                  >
                    {navigation.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
