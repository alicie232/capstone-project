import styled from 'styled-components';

export default function TaskList({todos, onTodoChange}) {
  return (
    <ul>
      {todos.map(({id, isChecked, task}) => (
        <ListItem key={id}>
          <label>
            <input type="checkbox" checked={isChecked} onChange={() => onTodoChange(id)} />
            <Task checked={isChecked}>{task}</Task>
          </label>
        </ListItem>
      ))}
    </ul>
  );
}

const ListItem = styled.li`
  list-style: none;
`;

const Task = styled.span`
  text-decoration: ${({checked}) => {
    return checked && 'line-through';
  }};
`;
