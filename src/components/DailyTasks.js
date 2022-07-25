import {nanoid} from 'nanoid';
import styled from 'styled-components';
import TaskList from './TaskList';

export default function DailyTasks() {
  const dailyTasks = [
    {task: 'Räume lüften', id: nanoid()},
    {task: 'Betten machen', id: nanoid()},
    {task: 'Spülmaschine ausräumen', id: nanoid()},
    {task: 'Wäsche machen', id: nanoid()},
    {task: 'Müll rausbringen', id: nanoid()},
    {task: 'Böden saugen', id: nanoid()},
    {task: 'ungenutzte Dinge wegräumen', id: nanoid()},
    {task: 'Waschbecken im Bad reinigen', id: nanoid()},
    {task: 'Toilette im Bad reinigen', id: nanoid()},
    {task: 'Arbeitsflächen in der Küche abwischen', id: nanoid()},
    {task: 'volle Spülmaschine anschalten', id: nanoid()},
  ];

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
        <TaskList tasks={dailyTasks} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  border: 1px solid;
`;
