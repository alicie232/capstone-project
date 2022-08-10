import {nanoid} from 'nanoid';
import {useState} from 'react';
import styled from 'styled-components';
import {loadFromLocalStorage, writeToLocalStorage} from '../util/localstorage';

export default function NewTodoForm({insertNewTodo}) {
  const [task, setTask] = useState('');

  const [category, setCategory] = useState(42);

  function handleSubmit(event) {
    event.preventDefault();
    const currentTemplates = loadFromLocalStorage('TaskTemplates');

    const newTask = {id: nanoid(), task, checkedAt: '', isChecked: false};

    writeToLocalStorage(
      'TaskTemplates',
      currentTemplates.map(template => {
        if (template.tasks !== undefined) {
          if (template.weekday === category) {
            return {...template, tasks: [...template.tasks, newTask]};
          }
        }
        return template;
      })
    );

    insertNewTodo(category, newTask);
  }

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="task">
          Aufgaben:
          <input
            id="task"
            type="text"
            value={task}
            onChange={e => {
              setTask(e.target.value);
            }}
            placeholder="Aufgabe"
          />
        </label>

        <label htmlFor="category">Kategorie:</label>
        <StyledSelect
          id="category"
          name="category"
          value={category}
          onChange={e => {
            setCategory(e.target.value);
          }}
        >
          <option value="42">täglich</option>
          <option value="1">Montag</option>
          <option value="2">Dienstag</option>
          <option value="3">Mittwoch</option>
          <option value="4">Donnerstag</option>
          <option value="5">Freitag</option>
          <option value="6">Samstag</option>
          <option value="0">Sonntag</option>
        </StyledSelect>

        <StyledButton type="submit">abschicken</StyledButton>
      </StyledForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 375px;
  margin: auto;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

const StyledSelect = styled.select`
  width: 100px;
`;

const StyledButton = styled.button`
  width: 100px;
`;
