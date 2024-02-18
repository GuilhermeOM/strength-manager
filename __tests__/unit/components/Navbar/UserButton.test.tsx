import { fireEvent, render } from '@testing-library/react';
import UserButton from '@/components/Navbar/UserButton';
import '@testing-library/jest-dom';

describe('UserButton', () => {
  it('Validates if desktop on click event renders the disconnect button when clicked', () => {
    const { getByTestId, getByText } = render(<UserButton />);
    fireEvent.click(getByTestId('desktop-user-button'));

    expect(getByText('Disconnect')).toBeInTheDocument();
  });

  it('Validates if mobile on click event renders the disconnect button when clicked', () => {
    const { getByTestId, getByText } = render(<UserButton />);
    fireEvent.click(getByTestId('mobile-user-button'));

    expect(getByText('Disconnect')).toBeInTheDocument();
  });
});
