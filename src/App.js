import {useState, useEffect} from 'react';
import HomePage from './pages/HomePage';
import NewTodoForm from './components/NewTodoForm';
import {loadFromLocalStorage, writeToLocalStorage} from './util/localstorage';
import {dailyTodos} from './db';
import Navigation from './components/Navigation/Navigation';
import {Route, Routes} from 'react-router-dom';
import TaskList from './components/TaskList';
import CurrentDate from './components/CurrentDate';
import EditTodo from './components/Buttons/EditTodo';
import NewTodo from './components/Buttons/NewTodo';

const templatesFromLocal = loadFromLocalStorage('TaskTemplates');
const todosFromLocal = loadFromLocalStorage(new Date().toLocaleDateString());

export default function App() {
  const [counter, setCounter] = useState({counterTrue: 0, counterFalse: 0});

  const [time, setTime] = useState(CurrentDate);
  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [advices, setAdvices] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvices(data.slip.advice);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const [taskTemplates] = useState(() => {
    return templatesFromLocal ?? dailyTodos;
  });

  const [todos, setTodos] = useState(() => {
    if (todosFromLocal === null) {
      return taskTemplates;
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

  function handleOpenForm() {
    setIsOpen(true);
  }

  function handleEditTodo() {
    setEdit(toggle => !toggle);
  }

  useEffect(() => {
    writeToLocalStorage('TaskTemplates', taskTemplates);
  }, [taskTemplates]);

  useEffect(() => {
    writeToLocalStorage(new Date().toLocaleDateString(), todos);
  }, [todos]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(CurrentDate);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  useEffect(() => {
    const todosFromLocal = loadFromLocalStorage(new Date().toLocaleDateString());
    const checkedTodos = todosFromLocal?.filter(todos => todos.tasks);

    let counterDone = 0;
    let counterOpen = 0;

    checkedTodos?.forEach(todos => {
      const tasksDone = todos.tasks.filter(task => task.isChecked === true);
      const tasksOpen = todos.tasks.filter(task => task.isChecked === false);
      counterDone += tasksDone.length;
      counterOpen += tasksOpen.length;
    });

    setCounter({counterTrue: counterDone, counterFalse: counterOpen});
  }, [todos]);

  return (
    <>
      <NewTodoForm open={isOpen} onClose={handleCloseForm} insertNewTodo={insertNewTodo} />

      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage advices={advices} time={time} counter={counter} />} />

        <Route
          path="all"
          element={
            <>
              <EditTodo onEditTodo={handleEditTodo} />
              <TaskList
                todos={todos}
                onTodoCheck={handleTodos}
                insertNewTodo={insertNewTodo}
                taskTemplates={taskTemplates}
                deleteTodo={handleDeleteTodo}
                edit={edit}
              />
            </>
          }
        />
        <Route
          path="today"
          element={
            <>
              <NewTodo onOpenForm={handleOpenForm} />
              <TaskList
                todos={todos.filter(todo => todo.weekday === new Date().getDay() || todo.weekday === 42)}
                onTodoCheck={handleTodos}
                insertNewTodo={insertNewTodo}
                taskTemplates={taskTemplates}
                deleteTodo={handleDeleteTodo}
                edit={edit}
              />
            </>
          }
        />
      </Routes>
    </>
  );
}
