import styled from 'styled-components';

export default function TaskList({todos, onTodoChange, deleteTodo}) {
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
                        onChange={onTodoChange}
                      />

                      <Task checked={task.isChecked}>{task.task}</Task>
                    </StyledLabel>

                    <DeleteButton
                      type="button"
                      onClick={event => {
                        event.stopPropagation();
                        deleteTodo(task.id);
                      }}
                    >
                      <img src="../assets/icons/button-delete.svg" alt="delete" />
                    </DeleteButton>
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
  border: solid;
  border-radius: 15px;
  box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.2);
  margin: 5px;
  padding: 20px;
  margin-bottom: 50px;
`;

const StyledTitle = styled.h3`
  font-size: 1.8rem;
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
  font-size: 1.3rem;
  padding: 10px 0 10px 0;
  cursor: move;
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

const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
`;
