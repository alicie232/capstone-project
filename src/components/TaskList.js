import styled from 'styled-components';

export default function TaskList({todos, onTodoChange}) {
  return todos.map(todo => {
    return (
      <Wrapper key={todo.id}>
        <h1>{todo.category}</h1>
        <p>{todo.description}</p>

        {todo.tasks === undefined ? (
          <img src={todo.image} alt="funny dog" />
        ) : (
          <StyledList>
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
                </ListItem>
              );
            })}
          </StyledList>
        )}
      </Wrapper>
    );
  });
}

const Wrapper = styled.div`
  border: solid;
  border-radius: 15px;
  margin: 5px;
  padding: 5px;
`;

const StyledList = styled.ul`
  padding: 0 0 0 15px;
`;

const ListItem = styled.li`
  list-style: none;
`;

const Checkbox = styled.input`
  accent-color: #9b59b6;
`;

const Task = styled.span`
  text-decoration: ${({checked}) => {
    return checked && 'line-through';
  }};
`;
