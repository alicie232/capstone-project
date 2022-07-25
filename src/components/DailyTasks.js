import {useState} from 'react';
import {nanoid} from 'nanoid';
import styled from 'styled-components';
import TaskList from './TaskList';

export default function DailyTasks() {
  const dailyTasks = [
    {task: 'Räume lüften', isChecked: false, id: nanoid()},
    {task: 'Betten machen', isChecked: false, id: nanoid()},
    {task: 'Spülmaschine ausräumen', isChecked: false, id: nanoid()},
    {task: 'Wäsche machen', isChecked: false, id: nanoid()},
    {task: 'Müll rausbringen', isChecked: false, id: nanoid()},
    {task: 'Böden saugen', isChecked: false, id: nanoid()},
    {task: 'ungenutzte Dinge wegräumen', isChecked: false, id: nanoid()},
    {task: 'Waschbecken im Bad reinigen', isChecked: false, id: nanoid()},
    {task: 'Toilette im Bad reinigen', isChecked: false, id: nanoid()},
    {task: 'Arbeitsflächen in der Küche abwischen', isChecked: false, id: nanoid()},
    {task: 'volle Spülmaschine anschalten', isChecked: false, id: nanoid()},
  ];
  const [todos, setTodos] = useState(dailyTasks);
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
        <TaskList todos={todos} setTodos={setTodos} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  border: 1px solid;
`;
