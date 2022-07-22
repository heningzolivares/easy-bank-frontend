import { render, screen } from '@testing-library/react';

import Home from '../pages/index';

describe('home page', () => {
  it('should render correctly', () => {
    render(<Home />);
    expect(screen.getByText('Hello world!')).toBeInTheDocument();
  });
});
