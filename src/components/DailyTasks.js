import styled from 'styled-components';
import DailyTaskList from './DailyTaskList';

export default function DailyTasks() {
  return (
    <>
      <h1>täglich</h1>
      <p>
        Deine tägliche Aufgaben. <br />
        Schnell und mit wenigen Handgriffen erledigt.
      </p>
      <Wrapper>
        <DailyTaskList />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  border: 1px solid;
`;
