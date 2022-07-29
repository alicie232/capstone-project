import {render, screen} from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders heading', () => {
    render(<HomePage />);

    const heading = screen.getByRole('heading', {name: 'Aktuelle Aufgaben'});

    expect(heading).toBeInTheDocument();
  });
});
