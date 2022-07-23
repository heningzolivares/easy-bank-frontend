import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Title from '../Title';

const mockOnClick = jest.fn();

describe('Title component', () => {
  it('should render base variant correctly', async () => {
    expect.assertions(1);
    render(<Title>Hello</Title>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('should render base variant h2', async () => {
    expect.assertions(1);
    render(<Title variant="h2">Hello</Title>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
  it('should render base variant h3', async () => {
    expect.assertions(1);
    render(<Title variant="h3">Hello</Title>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
