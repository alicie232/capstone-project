import {useState, useEffect} from 'react';
import {dailyTodos} from '../db';

import {loadFromLocalStorage, writeToLocalStorage} from '../util/localstorage';
import TaskList from './TaskList';

export default function DailyTasks() {
  const [todos, setTodos] = useState(() => {
    const todosFromLocal = loadFromLocalStorage('todos');
    const uncheckedTodos = todosFromLocal?.map(todo => {
      return {
        ...todo,
        tasks: todo.tasks.map(task =>
          task.checkedAt !== new Date().toLocaleDateString() ? {...task, isChecked: false, checkedAt: ''} : task
        ),
      };
    });
    return uncheckedTodos ?? dailyTodos;
  });

  useEffect(() => {
    writeToLocalStorage('todos', todos);
  }, [todos]);

  function handleTodos(event) {
    const todoId = event.target.dataset.todoid;
    const taskId = event.target.dataset.taskid;

    setTodos(todos => {
      return todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            tasks: todo.tasks.map(task =>
              task.id === taskId
                ? {
                    ...task,
                    isChecked: !task.isChecked,
                    checkedAt: !task.isChecked ? new Date().toLocaleDateString() : '',
                  }
                : task
            ),
          };
        }
        return todo;
      });
    });
  }

  return (
    <>
      <TaskList todos={todos} onTodoChange={handleTodos} />
    </>
  );
}
