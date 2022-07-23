import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../Button';

const mockOnClick = jest.fn();

describe('Button component', () => {
  it('should render correctly', async () => {
    expect.assertions(2);
    render(<Button onClick={mockOnClick}>Hello</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    await userEvent.click(btn);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
