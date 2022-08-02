import {useState, useEffect} from 'react';
import {dailyTodos} from '../db';
import {loadFromLocalStorage, writeToLocalStorage} from '../util/localstorage';
import TaskList from './TaskList';

export default function DailyTasks() {
  const [daily, monday, tuesday, wednesday, thursday, friday, weekend] = dailyTodos;
  let currentday;
  switch (new Date().getDay()) {
    case 0:
      currentday = [weekend];
      break;
    case 1:
      currentday = [daily, monday];
      break;
    case 2:
      currentday = [daily, tuesday];
      break;
    case 3:
      currentday = [daily, wednesday];
      break;
    case 4:
      currentday = [daily, thursday];
      break;
    case 5:
      currentday = [daily, friday];
      break;
    case 6:
      currentday = [weekend];
      break;
    default:
  }

  const [todos, setTodos] = useState(() => {
    const todosFromLocal = loadFromLocalStorage('todos');
    const uncheckedTodos = todosFromLocal?.map(todo => {
      if (todo.tasks !== undefined) {
        return {
          ...todo,
          tasks: todo.tasks.map(task =>
            task.checkedAt !== new Date().toLocaleDateString() ? {...task, isChecked: false, checkedAt: ''} : task
          ),
        };
      }
      return todo;
    });
    return uncheckedTodos ?? currentday;
  });

  useEffect(() => {
    writeToLocalStorage('todos', todos);
  }, [todos]);

  function handleTodos(event) {
    const todoId = event.target.dataset.todoid;
    const taskId = event.target.dataset.taskid;

    setTodos(todos => {
      return todos.map(todo => {
        if (todo.id === todoId && todo.tasks !== undefined) {
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
