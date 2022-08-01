import {useState} from 'react';
import {dailyTodos} from '../db';
import styled from 'styled-components';

export default function DailyTasks() {
  const [todos, setTodos] = useState(dailyTodos);

  function handleChange(event) {
    const todoId = event.target.dataset.todoid;
    const taskId = event.target.dataset.taskid;

    setTodos(todos => {
      return todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            tasks: todo.tasks.map(task =>
              task.id === taskId
                ? {
                    ...task,
                    isChecked: !task.isChecked,
                  }
                : task
            ),
          };
        }
        return todo;
      });
    });
  }

  return (
    <>
      {todos.map(todo => {
        return (
          <div key={todo.id}>
            <h1>{todo.category}</h1>
            <p>{todo.description}</p>
            <ul>
              {todo.tasks.map(task => {
                return (
                  <ListItem key={task.id}>
                    <label>
                      <Checkbox
                        type="checkbox"
                        checked={task.isChecked}
                        data-todoid={todo.id}
                        data-taskid={task.id}
                        onChange={handleChange}
                      />
                      <Task checked={task.isChecked}>{task.task}</Task>
                    </label>
                  </ListItem>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
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

const Checkbox = styled.input`
  accent-color: #9b59b6;
`;
