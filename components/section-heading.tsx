interface SectionHeadingProps {
  title: string;
  sub: string;
  children?: JSX.Element;
}

export default function SectionHeading({
  title,
  sub,
  children,
}: SectionHeadingProps) {
  return (
    <div className='w-full h-fit min-h-6 mb-4 relative'>
      <div className='w-fit leading-relaxed'>
        <h4 className='text-lg font-extrabold leading-4 text-black'>{title}</h4>
        <sub className='text-gray-500 font-medium'>{sub}</sub>
      </div>

      {children}
    </div>
  );
}
