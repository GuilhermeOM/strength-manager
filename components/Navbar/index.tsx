import Link from 'next/link';
import Logo from '../Logo';
import Hamburguer from './Hamburguer';
import navigations from './static/navigations.json';
import UserButton from './UserButton';

export default function Navbar() {
  return (
    <header className='w-screen h-16 px-6 flex items-center fixed backdrop-blur-sm z-10'>
      <div className='flex flex-col w-screen max-w-7xl mx-auto relative'>
        <section className='w-fit mx-auto sm:m-0 inline-flex'>
          <Logo />

          <nav className='hidden sm:block ml-12'>
            <ul className='inline-flex [&_li]:mx-3'>
              {navigations.data.map((navigation) => (
                <li key={navigation.id} className='first:ml-0 last:mr-0'>
                  <Link
                    href={navigation.href}
                    className='text-sm font-medium text-gray-500 hover:text-black'
                  >
                    {navigation.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <section className='absolute left-0 flex items-center justify-center'>
          <Hamburguer />
        </section>

        <section className='px-2 absolute right-0 hidden sm:flex items-center justify-center'>
          <UserButton />
        </section>
      </div>
    </header>
  );
}
