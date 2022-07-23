import { render, screen } from '@testing-library/react';

import Badge from '../Badge';

describe('Badge component', () => {
  it('should render base variant correctly', async () => {
    expect.assertions(1);
    render(<Badge>Icon</Badge>);
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });
});
