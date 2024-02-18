import { fireEvent, render } from '@testing-library/react';
import Hamburguer from '@/components/Navbar/Hamburguer';
import navigations from '@/components/Navbar/static/navigations.json';
import '@testing-library/jest-dom';

describe('Navbar', () => {
  it('Validates if navigations are rendered', () => {
    const { getByRole, getByText } = render(<Hamburguer />);
    fireEvent.click(getByRole('button'));

    navigations.data.forEach((navigation) => {
      expect(getByText(navigation.name)).toBeInTheDocument();
    });
  });
});
