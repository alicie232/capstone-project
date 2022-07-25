import {render, screen} from '@testing-library/react';
import TaskList from './TaskList';

const dailyTasks = ['Räume lüften', 'Betten machen'];

describe('TaskList', () => {
  it('renders tasks', () => {
    render(<TaskList tasks={dailyTasks} />);

    const task = screen.getByText(/Räume/i, /Betten/i);

    expect(task).toBeInTheDocument();
  });
});
