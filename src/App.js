import {useState, useEffect} from 'react';
import styled from 'styled-components';
import HomePage from './pages/HomePage';
import NewTodoForm from './components/NewTodoForm';
import {loadFromLocalStorage, writeToLocalStorage} from './util/localstorage';
import {dailyTodos} from './db';

const templatesFromLocal = loadFromLocalStorage('TaskTemplates');
const todosFromLocal = loadFromLocalStorage(new Date().toLocaleDateString());

export default function App() {
  const [taskTemplates] = useState(() => {
    return templatesFromLocal ?? dailyTodos;
  });

  const [todos, setTodos] = useState(() => {
    const todaysTodos = taskTemplates.filter(todo => todo.weekday === new Date().getDay() || todo.weekday === 42);

    if (todosFromLocal === null) {
      return todaysTodos;
    } else {
      return todosFromLocal;
    }
  });

  function insertNewTodo(category, newTodo) {
    setTodos(todos => {
      return todos.map(todo => {
        if (todo.weekday === category) {
          return {
            ...todo,
            tasks: [...todo.tasks, newTodo],
          };
        }
        return todo;
      });
    });
  }

  function updateTodo(todoId, taskId) {
    setTodos(todos => {
      return todos.map(todo => {
        if (todo.id === todoId && todo.tasks.length !== 0) {
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

  useEffect(() => {
    writeToLocalStorage('TaskTemplates', taskTemplates);
  }, [taskTemplates]);

  useEffect(() => {
    writeToLocalStorage(new Date().toLocaleDateString(), todos);
  }, [todos]);

  return (
    <>
      <StyledHeader>
        <h1>Tidy up your life</h1>
      </StyledHeader>
      <NewTodoForm insertNewTodo={insertNewTodo} />
      <HomePage todos={todos} insertNewTodo={insertNewTodo} updateTodo={updateTodo} taskTemplates={taskTemplates} />
    </>
  );
}

const StyledHeader = styled.header`
  text-align: center;
`;
