import {render, screen} from '@testing-library/react';
import DailyTasks from './DailyTasks';
describe('DailyTasks', () => {
  it('renders heading, description and an unsorted list', () => {
    render(<DailyTasks />);

    const heading = screen.getByRole('heading', {name: 'täglich'});
    const description = screen.getByText(/Aufgaben/i);
    const list = screen.getByRole('list');

    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(list).toBeInTheDocument();
  });
});
