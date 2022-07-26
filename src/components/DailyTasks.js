import {useState} from 'react';
import styled from 'styled-components';
import TaskList from './TaskList';
import dailyTasks from '../db';

export default function DailyTasks() {
  const [todos, setTodos] = useState(dailyTasks);

  function handleTodos(todoToHandle) {
    setTodos(todos.map(todo => (todo.id === todoToHandle.id ? {...todo, isChecked: !todo.isChecked} : todo)));
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
        <TaskList todos={todos} onTodos={handleTodos} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  border: 1px solid;
`;
