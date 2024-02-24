import { fireEvent, render } from '@testing-library/react';
import Hamburguer from '@/components/navbar/hamburguer';
import navigations from '@/components/navbar/static/navigations.json';
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
