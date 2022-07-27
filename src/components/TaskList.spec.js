import {render, screen} from '@testing-library/react';
import TaskList from './TaskList';
import {nanoid} from 'nanoid';

const dailyTasks = [
  {task: 'Räume lüften', isChecked: false, checkedAt: '', id: nanoid()},
  {task: 'Betten machen', isChecked: false, checkedAt: '', id: nanoid()},
];

describe('TaskList', () => {
  it('renders tasks', () => {
    render(<TaskList todos={dailyTasks} />);

    const task = screen.getByText(/Räume/i, /Betten/i);

    expect(task).toBeInTheDocument();
  });
});
