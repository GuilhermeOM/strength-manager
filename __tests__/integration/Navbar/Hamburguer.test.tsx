import { fireEvent, render } from '@testing-library/react';
import Hamburguer from '@/components/Navbar/Hamburguer';
import '@testing-library/jest-dom';

describe('Hamburguer', () => {
  it('Validates if on button click renders UserButton', () => {
    const { getByRole, getByTestId } = render(<Hamburguer />);
    fireEvent.click(getByRole('button'));

    expect(getByTestId('user-button')).toBeInTheDocument();
  });
});
