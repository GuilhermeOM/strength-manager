interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className='px-6 flex flex-col w-screen max-w-7xl sm:mx-auto relative'>
      {children}
    </div>
  );
}
