import {useEffect, useState} from 'react';
import {loadFromLocalStorage, writeToLocalStorage} from '../util/localstorage';
import styled from 'styled-components';
import TaskList from './TaskList';
import dailyTasks from '../db';

export default function DailyTasks() {
  const [todos, setTodos] = useState(() => {
    const value = loadFromLocalStorage('todos');
    return value ?? dailyTasks;
  });

  useEffect(() => {
    writeToLocalStorage('todos', todos);
  }, [todos]);

  function handleTodos(todoToHandleId) {
    setTodos(todos.map(todo => (todo.id === todoToHandleId ? {...todo, isChecked: !todo.isChecked} : todo)));
  }

  return (
    <>
      <header>
        <h1>täglich</h1>
        <p>
          Deine tägliche Aufgaben. <br />
          Schnell und mit wenigen Handgriffen erledigt.
        </p>
      </header>
      <Wrapper>
        <TaskList todos={todos} onTodoChange={handleTodos} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  border: 1px solid;
`;
