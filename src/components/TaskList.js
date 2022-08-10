import styled from 'styled-components';

export default function TaskList({todos, onTodoChange, deleteTodo}) {
  return todos.map(todo => {
    return (
      <Wrapper key={todo.id}>
        <StyledTitle>{todo.title}</StyledTitle>

        <p>{todo.description}</p>

        {todo.tasks.length === 0 ? (
          <Image src={todo.image} alt="funny dog" />
        ) : (
          <StyledList role="list">
            {todo.tasks.map(task => {
              return (
                <ListItem key={task.id}>
                  <label>
                    <Checkbox
                      type="checkbox"
                      checked={task.isChecked}
                      data-todoid={todo.id}
                      data-taskid={task.id}
                      onChange={onTodoChange}
                    />
                    <Task checked={task.isChecked}>{task.task}</Task>
                  </label>
                  <button
                    type="button"
                    onClick={event => {
                      event.stopPropagation();
                      deleteTodo(task.id);
                    }}
                  >
                    X
                  </button>
                </ListItem>
              );
            })}
          </StyledList>
        )}
      </Wrapper>
    );
  });
}

const Wrapper = styled.article`
  border: solid;
  border-radius: 15px;
  margin: 5px;
  padding: 5px;
`;

const StyledTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
`;

const Image = styled.img`
  display: block;
  margin: auto;
  margin-bottom: 10px;
  border: 1px solid #063970;
  width: 50%;
`;

const StyledList = styled.ul`
  padding: 0 0 0 15px;
`;

const ListItem = styled.li`
  list-style: none;
`;

const Checkbox = styled.input`
  accent-color: var(--color-highlight);
`;

const Task = styled.span`
  text-decoration: ${({checked}) => {
    return checked && 'line-through';
  }};
`;
