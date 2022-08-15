import styled from 'styled-components';
import TaskList from '../components/TaskList';

export default function HomePage({todos, onTodoCheck, insertNewTodo, taskTemplates, deleteTodo, edit}) {
  return (
    <>
      <StyledHeader>Aktuelle Aufgaben</StyledHeader>
      <Wrapper>
        <TaskList
          todos={todos}
          onTodoCheck={onTodoCheck}
          insertNewTodo={insertNewTodo}
          taskTemplates={taskTemplates}
          deleteTodo={deleteTodo}
          edit={edit}
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
  font-size: var(--fontsize-large);
  text-align: center;
  padding: 20px;
`;
