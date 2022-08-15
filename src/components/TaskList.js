import styled from 'styled-components';
import DeleteTaskButton from './Button/DeleteTaskButton';

export default function TaskList({todos, onTodoCheck, deleteTodo, edit}) {
  return todos.map(todo => {
    return (
      <Wrapper key={todo.id}>
        <StyledTitle>{todo.title}</StyledTitle>
        <Description>{todo.description}</Description>
        {todo.tasks.length === 0 ? (
          <Image src={todo.image} alt="funny dog" />
        ) : (
          <ul>
            {todo.tasks.map(task => {
              return (
                <div key={task.id}>
                  <ListItem>
                    <StyledLabel>
                      <Checkbox
                        type="checkbox"
                        checked={task.isChecked}
                        data-todoid={todo.id}
                        data-taskid={task.id}
                        onChange={onTodoCheck}
                      />
                      <Task checked={task.isChecked}>{task.task}</Task>
                    </StyledLabel>
                    {edit && <DeleteTaskButton task={task} deleteTodo={deleteTodo} />}
                  </ListItem>
                  <hr />
                </div>
              );
            })}
          </ul>
        )}
      </Wrapper>
    );
  });
}

const Wrapper = styled.article`
  max-width: 375px;
  margin: auto;
  border: solid;
  border-radius: 15px;
  box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin-bottom: 50px;
`;

const StyledTitle = styled.h3`
  font-size: var(--fontsize-large);
  padding: 10px;
`;

const Description = styled.p`
  padding: 10px;
`;

const Image = styled.img`
  display: block;
  margin: auto;
  margin-bottom: 10px;
  border: 1px solid #063970;
  width: 50%;
`;

const ListItem = styled.li`
  display: flex;
  list-style: none;
  justify-content: space-between;
  font-size: var(--fontsize-medium);
  padding: 10px 0 10px 0;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  accent-color: var(--color-highlight);
  transform: scale(1.5);
`;

const Task = styled.span`
  padding-left: 15px;
  padding-right: 5px;
  text-decoration: ${({checked}) => {
    return checked && 'line-through';
  }};
`;
