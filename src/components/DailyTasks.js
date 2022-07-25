import styled from 'styled-components';
import TaskList from './TaskList';

const dailyTasks = [
  'Räume lüften',
  'Betten machen',
  'Spülmaschine ausräumen',
  'Wäsche machen',
  'Müll rausbringen',
  'Böden saugen',
  'ungenutzte Dinge wegräumen',
  'Waschbecken im Bad reinigen',
  'Toilette im Bad reinigen',
  'Arbeitsflächen in der Küche abwischen',
  'volle Spülmaschine anschalten',
];

export default function DailyTasks() {
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
