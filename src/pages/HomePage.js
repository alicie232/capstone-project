import styled from 'styled-components';
import DailyTasks from '../components/DailyTasks';

export default function HomePage({todos, insertNewTodo, updateTodo, taskTemplates, deleteTodo}) {
  return (
    <>
      <StyledHeader>Aktuelle Aufgaben</StyledHeader>
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
  font-size: 2rem;
  text-align: center;
  padding: 20px;
`;
