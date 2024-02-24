import Link from 'next/link';
import Logo from '../logo';
import Hamburguer from './hamburguer';
import navigations from './static/navigations.json';
import UserButton from './user-button';
import Container from '../container';

export default function Navbar() {
  return (
    <header className='w-screen h-16 flex items-center fixed backdrop-blur-sm z-10'>
      <Container>
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

        <section className='absolute left-6 flex items-center justify-center'>
          <Hamburguer />
        </section>

        <section className='absolute right-6 hidden sm:flex items-center justify-center'>
          <UserButton />
        </section>
      </Container>
    </header>
  );
}
