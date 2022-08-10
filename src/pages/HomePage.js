import styled from 'styled-components';
import DailyTasks from '../components/DailyTasks';

export default function HomePage({todos, insertNewTodo, updateTodo, taskTemplates, deleteTodo}) {
  return (
    <>
      <StyledHeader>
        <h2>Aktuelle Aufgaben</h2>
      </StyledHeader>
      <Wrapper>
        <DailyTasks
          todos={todos}
          insertNewTodo={insertNewTodo}
          updateTodo={updateTodo}
          taskTemplates={taskTemplates}
          deleteTodo={deleteTodo}
        />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  max-width: 375px;
  margin: auto;
`;

const StyledHeader = styled.header`
  text-align: center;
  border: 2px;
  border-style: double dashed;
  max-width: 360px;
  margin: auto;
`;
