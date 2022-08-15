import {useState, useEffect} from 'react';
import styled from 'styled-components';
import HomePage from './pages/HomePage';
import NewTodoForm from './components/NewTodoForm';
import {loadFromLocalStorage, writeToLocalStorage} from './util/localstorage';
import {dailyTodos} from './db';
import Navigation from './components/Navigation/Navigation';
import {Route, Routes} from 'react-router-dom';
import TaskList from './components/TaskList';

const templatesFromLocal = loadFromLocalStorage('TaskTemplates');
const todosFromLocal = loadFromLocalStorage(new Date().toLocaleDateString());

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [taskTemplates] = useState(() => {
    return templatesFromLocal ?? dailyTodos;
  });

  const [todos, setTodos] = useState(() => {
    if (todosFromLocal === null) {
      return dailyTodos;
    } else {
      return todosFromLocal;
    }
  });

  function handleTodos(event) {
    const todoId = event.target.dataset.todoid;
    const taskId = event.target.dataset.taskid;

    updateTodo(todoId, taskId);
  }

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
    setIsOpen(false);
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

  function handleDeleteTodo(id) {
    setTodos(todos => {
      return todos.map(todo => {
        return {
          ...todo,
          tasks: todo.tasks.filter(task => task.id !== id),
        };
      });
    });
  }

  function handleCloseForm() {
    setIsOpen(false);
  }

  useEffect(() => {
    writeToLocalStorage('TaskTemplates', taskTemplates);
  }, [taskTemplates]);

  useEffect(() => {
    writeToLocalStorage(new Date().toLocaleDateString(), todos);
  }, [todos]);

  return (
    <>
      <StyledHeader>Tidy up your life</StyledHeader>
      <AddTodoButton type="button" aria-label="Aufgabe hinzufügen" onClick={() => setIsOpen(true)}>
        +
      </AddTodoButton>
      <EditButton onClick={() => setEdit(toggle => !toggle)}>
        <img src="./assets/icons/button_edit.svg" alt="edit todo" />
      </EditButton>
      <NewTodoForm open={isOpen} onClose={handleCloseForm} insertNewTodo={insertNewTodo} />

      <Navigation />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              todos={todos.filter(todo => todo.weekday === new Date().getDay() || todo.weekday === 42)}
              onTodoCheck={handleTodos}
              insertNewTodo={insertNewTodo}
              updateTodo={updateTodo}
              taskTemplates={taskTemplates}
              deleteTodo={handleDeleteTodo}
              edit={edit}
            />
          }
        />
        <Route
          path="all"
          element={
            <TaskList
              todos={todos}
              onTodoCheck={handleTodos}
              insertNewTodo={insertNewTodo}
              taskTemplates={taskTemplates}
              deleteTodo={handleDeleteTodo}
              edit={edit}
            />
          }
        />
      </Routes>
    </>
  );
}

const StyledHeader = styled.header`
  margin: 30px;
  text-align: center;
  font-size: var(--fontsize-large);
`;

const EditButton = styled.button`
  cursor: pointer;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 4px;
  bottom: 120px;
  right: 40px;
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 50%;
  color: #f5f5f5;
  text-decoration: none;
  background-color: red;
  font-size: 1rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  z-index: 1;
`;

const AddTodoButton = styled.button`
  cursor: pointer;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 4px;
  bottom: 40px;
  right: 40px;
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 50%;
  color: #f5f5f5;
  text-decoration: none;
  background-color: var(--color-highlight);
  font-size: 2rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
