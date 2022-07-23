import { render, screen } from '@testing-library/react';

import Paragraph from '../Paragraph';

describe('Paragraph component', () => {
  it('should render correctly', async () => {
    expect.assertions(1);
    render(<Paragraph>lorem</Paragraph>);
    expect(screen.getByText('lorem')).toBeInTheDocument();
  });
});
